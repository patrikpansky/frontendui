
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AnswerLargeCard as LargeCard } from "./AnswerLargeCard";

export const AnswerLazyQueryFragment = `
fragment AnswerMediumCardFragment on AnswerGQLModel {
        id
        lastchange
        created
        value
        aswered
        expired
    }`

export const AnswerLazyQuery = `
    query answerById($id: UUID!) {
        result: answerById(id: $id) {
            __typename
            id
            lastchange
            created
            value
            aswered
            expired
        }
    }`


export const AnswerQueryAction = CreateAsyncActionFromQuery(AnswerLazyQuery);
export const AnswerQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'answer'", success: "Načtení 'answer' se povedlo"})

export const AnswerLazy = (Component=LargeCard) => 
    (QueryAction=AnswerQueryAction, ActionValidator=AnswerQueryActionValidator) => {
        const AnswerLazyResult = ({id, children, ...props}) => {
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
                    <Component answer={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'answer' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AnswerLazyResult
}
