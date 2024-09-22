
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { UserconnectionLargeCard as LargeCard } from "./UserconnectionLargeCard";

export const UserconnectionLazyQueryFragment = `
fragment UserconnectionMediumCardFragment on UserconnectionGQLModel {
    }`

export const UserconnectionLazyQuery = `
    query userconnectionById($id: UUID!) {
        result: userconnectionById(id: $id) {
            __typename
        }
    }`


export const UserconnectionQueryAction = CreateAsyncActionFromQuery(UserconnectionLazyQuery);
export const UserconnectionQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'userconnection'", success: "Načtení 'userconnection' se povedlo"})

export const UserconnectionLazy = (Component=LargeCard) => 
    (QueryAction=UserconnectionQueryAction, ActionValidator=UserconnectionQueryActionValidator) => {
        const UserconnectionLazyResult = ({id, children, ...props}) => {
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
                    <Component userconnection={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'userconnection' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return UserconnectionLazyResult
}
