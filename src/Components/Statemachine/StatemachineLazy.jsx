
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { StatemachineLargeCard as LargeCard } from "./StatemachineLargeCard";

export const StatemachineLazyQueryFragment = `
fragment StatemachineMediumCardFragment on StatemachineGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const StatemachineLazyQuery = `
    query statemachineById($id: UUID!) {
        result: statemachineById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }`


export const StatemachineQueryAction = CreateAsyncActionFromQuery(StatemachineLazyQuery);
export const StatemachineQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'statemachine'", success: "Načtení 'statemachine' se povedlo"})

export const StatemachineLazy = (Component=LargeCard) => 
    (QueryAction=StatemachineQueryAction, ActionValidator=StatemachineQueryActionValidator) => {
        const StatemachineLazyResult = ({id, children, ...props}) => {
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
                    <Component statemachine={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'statemachine' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return StatemachineLazyResult
}
