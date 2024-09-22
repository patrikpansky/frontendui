
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FinancecategoryLargeCard as LargeCard } from "./FinancecategoryLargeCard";

export const FinancecategoryLazyQueryFragment = `
fragment FinancecategoryMediumCardFragment on FinancecategoryGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const FinancecategoryLazyQuery = `
    query financecategoryById($id: UUID!) {
        result: financecategoryById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const FinancecategoryQueryAction = CreateAsyncActionFromQuery(FinancecategoryLazyQuery);
export const FinancecategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'financecategory'", success: "Načtení 'financecategory' se povedlo"})

export const FinancecategoryLazy = (Component=LargeCard) => 
    (QueryAction=FinancecategoryQueryAction, ActionValidator=FinancecategoryQueryActionValidator) => {
        const FinancecategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component financecategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'financecategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FinancecategoryLazyResult
}
