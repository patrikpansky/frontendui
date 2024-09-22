
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogrammessageLargeCard as LargeCard } from "./AcprogrammessageLargeCard";

export const AcprogrammessageLazyQueryFragment = `
fragment AcprogrammessageMediumCardFragment on AcprogrammessageGQLModel {
        id
        created
        lastchange
        name
        description
        date
    }`

export const AcprogrammessageLazyQuery = `
    query acprogrammessageById($id: UUID!) {
        result: acprogrammessageById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            description
            date
        }
    }`


export const AcprogrammessageQueryAction = CreateAsyncActionFromQuery(AcprogrammessageLazyQuery);
export const AcprogrammessageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogrammessage'", success: "Načtení 'acprogrammessage' se povedlo"})

export const AcprogrammessageLazy = (Component=LargeCard) => 
    (QueryAction=AcprogrammessageQueryAction, ActionValidator=AcprogrammessageQueryActionValidator) => {
        const AcprogrammessageLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogrammessage={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogrammessage' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogrammessageLazyResult
}
