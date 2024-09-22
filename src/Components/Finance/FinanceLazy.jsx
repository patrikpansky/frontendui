
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FinanceLargeCard as LargeCard } from "./FinanceLargeCard";

export const FinanceLazyQueryFragment = `
fragment FinanceMediumCardFragment on FinanceGQLModel {
        id
        name
        amount
        lastchange
        created
        valid
    }`

export const FinanceLazyQuery = `
    query financeById($id: UUID!) {
        result: financeById(id: $id) {
            __typename
            id
            name
            amount
            lastchange
            created
            valid
        }
    }`


export const FinanceQueryAction = CreateAsyncActionFromQuery(FinanceLazyQuery);
export const FinanceQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'finance'", success: "Načtení 'finance' se povedlo"})

export const FinanceLazy = (Component=LargeCard) => 
    (QueryAction=FinanceQueryAction, ActionValidator=FinanceQueryActionValidator) => {
        const FinanceLazyResult = ({id, children, ...props}) => {
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
                    <Component finance={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'finance' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FinanceLazyResult
}
