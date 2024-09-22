
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PublicationtypeLargeCard as LargeCard } from "./PublicationtypeLargeCard";

export const PublicationtypeLazyQueryFragment = `
fragment PublicationtypeMediumCardFragment on PublicationtypeGQLModel {
        id
        name
        created
        lastchange
    }`

export const PublicationtypeLazyQuery = `
    query publicationtypeById($id: UUID!) {
        result: publicationtypeById(id: $id) {
            __typename
            id
            name
            created
            lastchange
        }
    }`


export const PublicationtypeQueryAction = CreateAsyncActionFromQuery(PublicationtypeLazyQuery);
export const PublicationtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'publicationtype'", success: "Načtení 'publicationtype' se povedlo"})

export const PublicationtypeLazy = (Component=LargeCard) => 
    (QueryAction=PublicationtypeQueryAction, ActionValidator=PublicationtypeQueryActionValidator) => {
        const PublicationtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component publicationtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'publicationtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PublicationtypeLazyResult
}
