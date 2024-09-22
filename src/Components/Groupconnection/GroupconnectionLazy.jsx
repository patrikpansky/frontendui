
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { GroupconnectionLargeCard as LargeCard } from "./GroupconnectionLargeCard";

export const GroupconnectionLazyQueryFragment = `
fragment GroupconnectionMediumCardFragment on GroupconnectionGQLModel {
    }`

export const GroupconnectionLazyQuery = `
    query groupconnectionById($id: UUID!) {
        result: groupconnectionById(id: $id) {
            __typename
        }
    }`


export const GroupconnectionQueryAction = CreateAsyncActionFromQuery(GroupconnectionLazyQuery);
export const GroupconnectionQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'groupconnection'", success: "Načtení 'groupconnection' se povedlo"})

export const GroupconnectionLazy = (Component=LargeCard) => 
    (QueryAction=GroupconnectionQueryAction, ActionValidator=GroupconnectionQueryActionValidator) => {
        const GroupconnectionLazyResult = ({id, children, ...props}) => {
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
                    <Component groupconnection={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'groupconnection' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return GroupconnectionLazyResult
}
