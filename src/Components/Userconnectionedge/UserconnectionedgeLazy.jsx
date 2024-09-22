
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { UserconnectionedgeLargeCard as LargeCard } from "./UserconnectionedgeLargeCard";

export const UserconnectionedgeLazyQueryFragment = `
fragment UserconnectionedgeMediumCardFragment on UserconnectionedgeGQLModel {
        cursor
    }`

export const UserconnectionedgeLazyQuery = `
    query userconnectionedgeById($id: UUID!) {
        result: userconnectionedgeById(id: $id) {
            __typename
            cursor
        }
    }`


export const UserconnectionedgeQueryAction = CreateAsyncActionFromQuery(UserconnectionedgeLazyQuery);
export const UserconnectionedgeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'userconnectionedge'", success: "Načtení 'userconnectionedge' se povedlo"})

export const UserconnectionedgeLazy = (Component=LargeCard) => 
    (QueryAction=UserconnectionedgeQueryAction, ActionValidator=UserconnectionedgeQueryActionValidator) => {
        const UserconnectionedgeLazyResult = ({id, children, ...props}) => {
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
                    <Component userconnectionedge={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'userconnectionedge' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return UserconnectionedgeLazyResult
}
