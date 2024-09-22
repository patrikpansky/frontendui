
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcclassificationlevelLargeCard as LargeCard } from "./AcclassificationlevelLargeCard";

export const AcclassificationlevelLazyQueryFragment = `
fragment AcclassificationlevelMediumCardFragment on AcclassificationlevelGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcclassificationlevelLazyQuery = `
    query acclassificationlevelById($id: UUID!) {
        result: acclassificationlevelById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcclassificationlevelQueryAction = CreateAsyncActionFromQuery(AcclassificationlevelLazyQuery);
export const AcclassificationlevelQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acclassificationlevel'", success: "Načtení 'acclassificationlevel' se povedlo"})

export const AcclassificationlevelLazy = (Component=LargeCard) => 
    (QueryAction=AcclassificationlevelQueryAction, ActionValidator=AcclassificationlevelQueryActionValidator) => {
        const AcclassificationlevelLazyResult = ({id, children, ...props}) => {
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
                    <Component acclassificationlevel={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acclassificationlevel' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcclassificationlevelLazyResult
}
