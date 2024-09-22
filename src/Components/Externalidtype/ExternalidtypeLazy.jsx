
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ExternalidtypeLargeCard as LargeCard } from "./ExternalidtypeLargeCard";

export const ExternalidtypeLazyQueryFragment = `
fragment ExternalidtypeMediumCardFragment on ExternalidtypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const ExternalidtypeLazyQuery = `
    query externalidtypeById($id: UUID!) {
        result: externalidtypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const ExternalidtypeQueryAction = CreateAsyncActionFromQuery(ExternalidtypeLazyQuery);
export const ExternalidtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'externalidtype'", success: "Načtení 'externalidtype' se povedlo"})

export const ExternalidtypeLazy = (Component=LargeCard) => 
    (QueryAction=ExternalidtypeQueryAction, ActionValidator=ExternalidtypeQueryActionValidator) => {
        const ExternalidtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component externalidtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'externalidtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ExternalidtypeLazyResult
}
