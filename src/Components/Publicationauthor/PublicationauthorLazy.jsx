
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PublicationauthorLargeCard as LargeCard } from "./PublicationauthorLargeCard";

export const PublicationauthorLazyQueryFragment = `
fragment PublicationauthorMediumCardFragment on PublicationauthorGQLModel {
        id
        name
        lastchange
        order
        share
        valid
    }`

export const PublicationauthorLazyQuery = `
    query publicationauthorById($id: UUID!) {
        result: publicationauthorById(id: $id) {
            __typename
            id
            name
            lastchange
            order
            share
            valid
        }
    }`


export const PublicationauthorQueryAction = CreateAsyncActionFromQuery(PublicationauthorLazyQuery);
export const PublicationauthorQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'publicationauthor'", success: "Načtení 'publicationauthor' se povedlo"})

export const PublicationauthorLazy = (Component=LargeCard) => 
    (QueryAction=PublicationauthorQueryAction, ActionValidator=PublicationauthorQueryActionValidator) => {
        const PublicationauthorLazyResult = ({id, children, ...props}) => {
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
                    <Component publicationauthor={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'publicationauthor' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PublicationauthorLazyResult
}
