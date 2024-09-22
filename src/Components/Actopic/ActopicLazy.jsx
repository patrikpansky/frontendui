
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ActopicLargeCard as LargeCard } from "./ActopicLargeCard";

export const ActopicLazyQueryFragment = `
fragment ActopicMediumCardFragment on ActopicGQLModel {
        id
        name
        nameEn
        created
        lastchange
        order
    }`

export const ActopicLazyQuery = `
    query actopicById($id: UUID!) {
        result: actopicById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
            order
        }
    }`


export const ActopicQueryAction = CreateAsyncActionFromQuery(ActopicLazyQuery);
export const ActopicQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'actopic'", success: "Načtení 'actopic' se povedlo"})

export const ActopicLazy = (Component=LargeCard) => 
    (QueryAction=ActopicQueryAction, ActionValidator=ActopicQueryActionValidator) => {
        const ActopicLazyResult = ({id, children, ...props}) => {
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
                    <Component actopic={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'actopic' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ActopicLazyResult
}
