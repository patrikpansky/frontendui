
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { QuestionLargeCard as LargeCard } from "./QuestionLargeCard";

export const QuestionLazyQueryFragment = `
fragment QuestionMediumCardFragment on QuestionGQLModel {
        id
        name
        lastchange
        created
        order
    }`

export const QuestionLazyQuery = `
    query questionById($id: UUID!) {
        result: questionById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            order
        }
    }`


export const QuestionQueryAction = CreateAsyncActionFromQuery(QuestionLazyQuery);
export const QuestionQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'question'", success: "Načtení 'question' se povedlo"})

export const QuestionLazy = (Component=LargeCard) => 
    (QueryAction=QuestionQueryAction, ActionValidator=QuestionQueryActionValidator) => {
        const QuestionLazyResult = ({id, children, ...props}) => {
            const [onResolve, onReject] = ActionValidator(useDispatch())
            const [data, dataPromise, report] = useFreshItem({id, ...props}, QueryAction)
            const {loading, errors, json} = report
            dataPromise
            .then(onResolve, onReject)
            if (loading) {
                return <div>Nahrávám</div>
            }
            if (errors) {
                return <div>Došlo k chybám <br/> {JSON.stringify(errors)}</div>
            }
            if (data) {
                return (
                    <Component question={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'question' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return QuestionLazyResult
}
