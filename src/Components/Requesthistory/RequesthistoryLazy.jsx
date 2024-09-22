
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RequesthistoryLargeCard as LargeCard } from "./RequesthistoryLargeCard";

export const RequesthistoryLazyQueryFragment = `
fragment RequesthistoryMediumCardFragment on RequesthistoryGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const RequesthistoryLazyQuery = `
    query requesthistoryById($id: UUID!) {
        result: requesthistoryById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }`


export const RequesthistoryQueryAction = CreateAsyncActionFromQuery(RequesthistoryLazyQuery);
export const RequesthistoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'requesthistory'", success: "Načtení 'requesthistory' se povedlo"})

export const RequesthistoryLazy = (Component=LargeCard) => 
    (QueryAction=RequesthistoryQueryAction, ActionValidator=RequesthistoryQueryActionValidator) => {
        const RequesthistoryLazyResult = ({id, children, ...props}) => {
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
                    <Component requesthistory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'requesthistory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RequesthistoryLazyResult
}
