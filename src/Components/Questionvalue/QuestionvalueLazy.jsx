
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { QuestionvalueLargeCard as LargeCard } from "./QuestionvalueLargeCard";

export const QuestionvalueLazyQueryFragment = `
fragment QuestionvalueMediumCardFragment on QuestionvalueGQLModel {
        id
        name
        lastchange
        created
        order
    }`

export const QuestionvalueLazyQuery = `
    query questionvalueById($id: UUID!) {
        result: questionvalueById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            order
        }
    }`


export const QuestionvalueQueryAction = CreateAsyncActionFromQuery(QuestionvalueLazyQuery);
export const QuestionvalueQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'questionvalue'", success: "Načtení 'questionvalue' se povedlo"})

export const QuestionvalueLazy = (Component=LargeCard) => 
    (QueryAction=QuestionvalueQueryAction, ActionValidator=QuestionvalueQueryActionValidator) => {
        const QuestionvalueLazyResult = ({id, children, ...props}) => {
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
                    <Component questionvalue={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'questionvalue' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return QuestionvalueLazyResult
}
