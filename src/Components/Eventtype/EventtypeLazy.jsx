
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { EventtypeLargeCard as LargeCard } from "./EventtypeLargeCard";

export const EventtypeLazyQueryFragment = `
fragment EventtypeMediumCardFragment on EventtypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const EventtypeLazyQuery = `
    query eventtypeById($id: UUID!) {
        result: eventtypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const EventtypeQueryAction = CreateAsyncActionFromQuery(EventtypeLazyQuery);
export const EventtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'eventtype'", success: "Načtení 'eventtype' se povedlo"})

export const EventtypeLazy = (Component=LargeCard) => 
    (QueryAction=EventtypeQueryAction, ActionValidator=EventtypeQueryActionValidator) => {
        const EventtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component eventtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'eventtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return EventtypeLazyResult
}
