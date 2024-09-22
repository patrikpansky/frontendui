
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { StateLargeCard as LargeCard } from "./StateLargeCard";

export const StateLazyQueryFragment = `
fragment StateMediumCardFragment on StateGQLModel {
        id
        created
        lastchange
        name
        nameEn
        order
    }`

export const StateLazyQuery = `
    query stateById($id: UUID!) {
        result: stateById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
            order
        }
    }`


export const StateQueryAction = CreateAsyncActionFromQuery(StateLazyQuery);
export const StateQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'state'", success: "Načtení 'state' se povedlo"})

export const StateLazy = (Component=LargeCard) => 
    (QueryAction=StateQueryAction, ActionValidator=StateQueryActionValidator) => {
        const StateLazyResult = ({id, children, ...props}) => {
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
                    <Component state={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'state' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return StateLazyResult
}
