
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PublicationLargeCard as LargeCard } from "./PublicationLargeCard";

export const PublicationLazyQueryFragment = `
fragment PublicationMediumCardFragment on PublicationGQLModel {
        id
        name
        created
        lastchange
        publishedDate
        place
        reference
        valid
    }`

export const PublicationLazyQuery = `
    query publicationById($id: UUID!) {
        result: publicationById(id: $id) {
            __typename
            id
            name
            created
            lastchange
            publishedDate
            place
            reference
            valid
        }
    }`


export const PublicationQueryAction = CreateAsyncActionFromQuery(PublicationLazyQuery);
export const PublicationQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'publication'", success: "Načtení 'publication' se povedlo"})

export const PublicationLazy = (Component=LargeCard) => 
    (QueryAction=PublicationQueryAction, ActionValidator=PublicationQueryActionValidator) => {
        const PublicationLazyResult = ({id, children, ...props}) => {
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
                    <Component publication={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'publication' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PublicationLazyResult
}
