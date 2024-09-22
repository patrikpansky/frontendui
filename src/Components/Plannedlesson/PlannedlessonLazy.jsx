
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PlannedlessonLargeCard as LargeCard } from "./PlannedlessonLargeCard";

export const PlannedlessonLazyQueryFragment = `
fragment PlannedlessonMediumCardFragment on PlannedlessonGQLModel {
        id
        name
        lastchange
        created
        order
        length
    }`

export const PlannedlessonLazyQuery = `
    query plannedlessonById($id: UUID!) {
        result: plannedlessonById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            order
            length
        }
    }`


export const PlannedlessonQueryAction = CreateAsyncActionFromQuery(PlannedlessonLazyQuery);
export const PlannedlessonQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'plannedlesson'", success: "Načtení 'plannedlesson' se povedlo"})

export const PlannedlessonLazy = (Component=LargeCard) => 
    (QueryAction=PlannedlessonQueryAction, ActionValidator=PlannedlessonQueryActionValidator) => {
        const PlannedlessonLazyResult = ({id, children, ...props}) => {
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
                    <Component plannedlesson={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'plannedlesson' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PlannedlessonLazyResult
}
