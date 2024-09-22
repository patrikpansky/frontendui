
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PresenceLargeCard as LargeCard } from "./PresenceLargeCard";

export const PresenceLazyQueryFragment = `
fragment PresenceMediumCardFragment on PresenceGQLModel {
        id
        lastchange
        created
    }`

export const PresenceLazyQuery = `
    query presenceById($id: UUID!) {
        result: presenceById(id: $id) {
            __typename
            id
            lastchange
            created
        }
    }`


export const PresenceQueryAction = CreateAsyncActionFromQuery(PresenceLazyQuery);
export const PresenceQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'presence'", success: "Načtení 'presence' se povedlo"})

export const PresenceLazy = (Component=LargeCard) => 
    (QueryAction=PresenceQueryAction, ActionValidator=PresenceQueryActionValidator) => {
        const PresenceLazyResult = ({id, children, ...props}) => {
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
                    <Component presence={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'presence' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PresenceLazyResult
}
