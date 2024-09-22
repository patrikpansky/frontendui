
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PlanLargeCard as LargeCard } from "./PlanLargeCard";

export const PlanLazyQueryFragment = `
fragment PlanMediumCardFragment on PlanGQLModel {
        id
        name
        lastchange
        created
    }`

export const PlanLazyQuery = `
    query planById($id: UUID!) {
        result: planById(id: $id) {
            __typename
            id
            name
            lastchange
            created
        }
    }`


export const PlanQueryAction = CreateAsyncActionFromQuery(PlanLazyQuery);
export const PlanQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'plan'", success: "Načtení 'plan' se povedlo"})

export const PlanLazy = (Component=LargeCard) => 
    (QueryAction=PlanQueryAction, ActionValidator=PlanQueryActionValidator) => {
        const PlanLazyResult = ({id, children, ...props}) => {
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
                    <Component plan={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'plan' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PlanLazyResult
}
