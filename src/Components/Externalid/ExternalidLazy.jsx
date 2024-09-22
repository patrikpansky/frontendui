
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ExternalidLargeCard as LargeCard } from "./ExternalidLargeCard";

export const ExternalidLazyQueryFragment = `
fragment ExternalidMediumCardFragment on ExternalidGQLModel {
        id
        lastchange
        created
        innerId
        outerId
        typeName
        link
    }`

export const ExternalidLazyQuery = `
    query externalidById($id: UUID!) {
        result: externalidById(id: $id) {
            __typename
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
    }`


export const ExternalidQueryAction = CreateAsyncActionFromQuery(ExternalidLazyQuery);
export const ExternalidQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'externalid'", success: "Načtení 'externalid' se povedlo"})

export const ExternalidLazy = (Component=LargeCard) => 
    (QueryAction=ExternalidQueryAction, ActionValidator=ExternalidQueryActionValidator) => {
        const ExternalidLazyResult = ({id, children, ...props}) => {
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
                    <Component externalid={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'externalid' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ExternalidLazyResult
}
