
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FinancetypeLargeCard as LargeCard } from "./FinancetypeLargeCard";

export const FinancetypeLazyQueryFragment = `
fragment FinancetypeMediumCardFragment on FinancetypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
        valid
    }`

export const FinancetypeLazyQuery = `
    query financetypeById($id: UUID!) {
        result: financetypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
            valid
        }
    }`


export const FinancetypeQueryAction = CreateAsyncActionFromQuery(FinancetypeLazyQuery);
export const FinancetypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'financetype'", success: "Načtení 'financetype' se povedlo"})

export const FinancetypeLazy = (Component=LargeCard) => 
    (QueryAction=FinancetypeQueryAction, ActionValidator=FinancetypeQueryActionValidator) => {
        const FinancetypeLazyResult = ({id, children, ...props}) => {
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
                    <Component financetype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'financetype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FinancetypeLazyResult
}
