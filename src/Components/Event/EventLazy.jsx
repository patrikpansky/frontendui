
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { EventLargeCard as LargeCard } from "./EventLargeCard";

export const EventLazyQueryFragment = `
fragment EventMediumCardFragment on EventGQLModel {
        id
        name
        nameEn
        lastchange
        created
        duration
        description
        place
        placeId
        startdate
        enddate
    }`

export const EventLazyQuery = `
    query eventById($id: UUID!) {
        result: eventById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
            duration
            description
            place
            placeId
            startdate
            enddate
        }
    }`


export const EventQueryAction = CreateAsyncActionFromQuery(EventLazyQuery);
export const EventQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'event'", success: "Načtení 'event' se povedlo"})

export const EventLazy = (Component=LargeCard) => 
    (QueryAction=EventQueryAction, ActionValidator=EventQueryActionValidator) => {
        const EventLazyResult = ({id, children, ...props}) => {
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
                    <Component event={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'event' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return EventLazyResult
}
