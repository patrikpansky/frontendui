
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { GroupconnectionedgeLargeCard as LargeCard } from "./GroupconnectionedgeLargeCard";

export const GroupconnectionedgeLazyQueryFragment = `
fragment GroupconnectionedgeMediumCardFragment on GroupconnectionedgeGQLModel {
        cursor
    }`

export const GroupconnectionedgeLazyQuery = `
    query groupconnectionedgeById($id: UUID!) {
        result: groupconnectionedgeById(id: $id) {
            __typename
            cursor
        }
    }`


export const GroupconnectionedgeQueryAction = CreateAsyncActionFromQuery(GroupconnectionedgeLazyQuery);
export const GroupconnectionedgeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'groupconnectionedge'", success: "Načtení 'groupconnectionedge' se povedlo"})

export const GroupconnectionedgeLazy = (Component=LargeCard) => 
    (QueryAction=GroupconnectionedgeQueryAction, ActionValidator=GroupconnectionedgeQueryActionValidator) => {
        const GroupconnectionedgeLazyResult = ({id, children, ...props}) => {
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
                    <Component groupconnectionedge={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'groupconnectionedge' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return GroupconnectionedgeLazyResult
}
