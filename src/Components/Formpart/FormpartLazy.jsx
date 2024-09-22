
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormpartLargeCard as LargeCard } from "./FormpartLargeCard";

export const FormpartLazyQueryFragment = `
fragment FormpartMediumCardFragment on FormpartGQLModel {
        id
        name
        lastchange
        created
        nameEn
        order
    }`

export const FormpartLazyQuery = `
    query formpartById($id: UUID!) {
        result: formpartById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }`


export const FormpartQueryAction = CreateAsyncActionFromQuery(FormpartLazyQuery);
export const FormpartQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formpart'", success: "Načtení 'formpart' se povedlo"})

export const FormpartLazy = (Component=LargeCard) => 
    (QueryAction=FormpartQueryAction, ActionValidator=FormpartQueryActionValidator) => {
        const FormpartLazyResult = ({id, children, ...props}) => {
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
                    <Component formpart={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formpart' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormpartLazyResult
}
