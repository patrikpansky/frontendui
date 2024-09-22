
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { QuestiontypeLargeCard as LargeCard } from "./QuestiontypeLargeCard";

export const QuestiontypeLazyQueryFragment = `
fragment QuestiontypeMediumCardFragment on QuestiontypeGQLModel {
        id
        name
        lastchange
        created
    }`

export const QuestiontypeLazyQuery = `
    query questiontypeById($id: UUID!) {
        result: questiontypeById(id: $id) {
            __typename
            id
            name
            lastchange
            created
        }
    }`


export const QuestiontypeQueryAction = CreateAsyncActionFromQuery(QuestiontypeLazyQuery);
export const QuestiontypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'questiontype'", success: "Načtení 'questiontype' se povedlo"})

export const QuestiontypeLazy = (Component=LargeCard) => 
    (QueryAction=QuestiontypeQueryAction, ActionValidator=QuestiontypeQueryActionValidator) => {
        const QuestiontypeLazyResult = ({id, children, ...props}) => {
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
                    <Component questiontype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'questiontype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return QuestiontypeLazyResult
}
