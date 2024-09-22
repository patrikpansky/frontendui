
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RequestLargeCard as LargeCard } from "./RequestLargeCard";

export const RequestLazyQueryFragment = `
fragment RequestMediumCardFragment on RequestGQLModel {
        id
        name
        lastchange
        created
        nameEn
        gdpr
    }`

export const RequestLazyQuery = `
    query requestById($id: UUID!) {
        result: requestById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
    }`


export const RequestQueryAction = CreateAsyncActionFromQuery(RequestLazyQuery);
export const RequestQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'request'", success: "Načtení 'request' se povedlo"})

export const RequestLazy = (Component=LargeCard) => 
    (QueryAction=RequestQueryAction, ActionValidator=RequestQueryActionValidator) => {
        const RequestLazyResult = ({id, children, ...props}) => {
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
                    <Component request={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'request' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RequestLazyResult
}
