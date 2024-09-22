
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormsectionLargeCard as LargeCard } from "./FormsectionLargeCard";

export const FormsectionLazyQueryFragment = `
fragment FormsectionMediumCardFragment on FormsectionGQLModel {
        id
        name
        lastchange
        created
        nameEn
        order
    }`

export const FormsectionLazyQuery = `
    query formsectionById($id: UUID!) {
        result: formsectionById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }`


export const FormsectionQueryAction = CreateAsyncActionFromQuery(FormsectionLazyQuery);
export const FormsectionQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formsection'", success: "Načtení 'formsection' se povedlo"})

export const FormsectionLazy = (Component=LargeCard) => 
    (QueryAction=FormsectionQueryAction, ActionValidator=FormsectionQueryActionValidator) => {
        const FormsectionLazyResult = ({id, children, ...props}) => {
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
                    <Component formsection={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formsection' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormsectionLazyResult
}
