
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ExternalidcategoryLargeCard as LargeCard } from "./ExternalidcategoryLargeCard";

export const ExternalidcategoryLazyQueryFragment = `
fragment ExternalidcategoryMediumCardFragment on ExternalidcategoryGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const ExternalidcategoryLazyQuery = `
    query externalidcategoryById($id: UUID!) {
        result: externalidcategoryById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const ExternalidcategoryQueryAction = CreateAsyncActionFromQuery(ExternalidcategoryLazyQuery);
export const ExternalidcategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'externalidcategory'", success: "Načtení 'externalidcategory' se povedlo"})

export const ExternalidcategoryLazy = (Component=LargeCard) => 
    (QueryAction=ExternalidcategoryQueryAction, ActionValidator=ExternalidcategoryQueryActionValidator) => {
        const ExternalidcategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component externalidcategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'externalidcategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ExternalidcategoryLazyResult
}
