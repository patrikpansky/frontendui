
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { infoLargeCard as LargeCard } from "./infoLargeCard";

export const infoLazyQueryFragment = `
fragment infoMediumCardFragment on infoGQLModel {
        after
        before
        first
        last
        hasNextPage
    }`

export const infoLazyQuery = `
    query pageinfoById($id: UUID!) {
        result: pageinfoById(id: $id) {
            __typename
            after
            before
            first
            last
            hasNextPage
        }
    }`


export const infoQueryAction = CreateAsyncActionFromQuery(infoLazyQuery);
export const infoQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'pageinfo'", success: "Načtení 'pageinfo' se povedlo"})

export const infoLazy = (Component=LargeCard) => 
    (QueryAction=infoQueryAction, ActionValidator=infoQueryActionValidator) => {
        const infoLazyResult = ({id, children, ...props}) => {
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
                    <Component pageinfo={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'pageinfo' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return infoLazyResult
}
