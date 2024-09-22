
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { SurveytypeLargeCard as LargeCard } from "./SurveytypeLargeCard";

export const SurveytypeLazyQueryFragment = `
fragment SurveytypeMediumCardFragment on SurveytypeGQLModel {
        id
        name
        lastchange
        created
    }`

export const SurveytypeLazyQuery = `
    query surveytypeById($id: UUID!) {
        result: surveytypeById(id: $id) {
            __typename
            id
            name
            lastchange
            created
        }
    }`


export const SurveytypeQueryAction = CreateAsyncActionFromQuery(SurveytypeLazyQuery);
export const SurveytypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'surveytype'", success: "Načtení 'surveytype' se povedlo"})

export const SurveytypeLazy = (Component=LargeCard) => 
    (QueryAction=SurveytypeQueryAction, ActionValidator=SurveytypeQueryActionValidator) => {
        const SurveytypeLazyResult = ({id, children, ...props}) => {
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
                    <Component surveytype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'surveytype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return SurveytypeLazyResult
}
