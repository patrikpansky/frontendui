
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcclassificationLargeCard as LargeCard } from "./AcclassificationLargeCard";

export const AcclassificationLazyQueryFragment = `
fragment AcclassificationMediumCardFragment on AcclassificationGQLModel {
        id
        created
        lastchange
        date
        order
    }`

export const AcclassificationLazyQuery = `
    query acclassificationById($id: UUID!) {
        result: acclassificationById(id: $id) {
            __typename
            id
            created
            lastchange
            date
            order
        }
    }`


export const AcclassificationQueryAction = CreateAsyncActionFromQuery(AcclassificationLazyQuery);
export const AcclassificationQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acclassification'", success: "Načtení 'acclassification' se povedlo"})

export const AcclassificationLazy = (Component=LargeCard) => 
    (QueryAction=AcclassificationQueryAction, ActionValidator=AcclassificationQueryActionValidator) => {
        const AcclassificationLazyResult = ({id, children, ...props}) => {
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
                    <Component acclassification={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acclassification' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcclassificationLazyResult
}
