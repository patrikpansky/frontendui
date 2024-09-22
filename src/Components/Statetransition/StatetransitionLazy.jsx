
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { StatetransitionLargeCard as LargeCard } from "./StatetransitionLargeCard";

export const StatetransitionLazyQueryFragment = `
fragment StatetransitionMediumCardFragment on StatetransitionGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const StatetransitionLazyQuery = `
    query statetransitionById($id: UUID!) {
        result: statetransitionById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }`


export const StatetransitionQueryAction = CreateAsyncActionFromQuery(StatetransitionLazyQuery);
export const StatetransitionQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'statetransition'", success: "Načtení 'statetransition' se povedlo"})

export const StatetransitionLazy = (Component=LargeCard) => 
    (QueryAction=StatetransitionQueryAction, ActionValidator=StatetransitionQueryActionValidator) => {
        const StatetransitionLazyResult = ({id, children, ...props}) => {
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
                    <Component statetransition={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'statetransition' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return StatetransitionLazyResult
}
