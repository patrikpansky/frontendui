
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { StatementofworkLargeCard as LargeCard } from "./StatementofworkLargeCard";

export const StatementofworkLazyQueryFragment = `
fragment StatementofworkMediumCardFragment on StatementofworkGQLModel {
        id
        lastchange
        startdate
        enddate
        created
        valid
    }`

export const StatementofworkLazyQuery = `
    query statementofworkById($id: UUID!) {
        result: statementofworkById(id: $id) {
            __typename
            id
            lastchange
            startdate
            enddate
            created
            valid
        }
    }`


export const StatementofworkQueryAction = CreateAsyncActionFromQuery(StatementofworkLazyQuery);
export const StatementofworkQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'statementofwork'", success: "Načtení 'statementofwork' se povedlo"})

export const StatementofworkLazy = (Component=LargeCard) => 
    (QueryAction=StatementofworkQueryAction, ActionValidator=StatementofworkQueryActionValidator) => {
        const StatementofworkLazyResult = ({id, children, ...props}) => {
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
                    <Component statementofwork={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'statementofwork' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return StatementofworkLazyResult
}
