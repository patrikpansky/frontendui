
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormitemLargeCard as LargeCard } from "./FormitemLargeCard";

export const FormitemLazyQueryFragment = `
fragment FormitemMediumCardFragment on FormitemGQLModel {
        id
        name
        lastchange
        created
        nameEn
        order
        value
    }`

export const FormitemLazyQuery = `
    query formitemById($id: UUID!) {
        result: formitemById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
            value
        }
    }`


export const FormitemQueryAction = CreateAsyncActionFromQuery(FormitemLazyQuery);
export const FormitemQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formitem'", success: "Načtení 'formitem' se povedlo"})

export const FormitemLazy = (Component=LargeCard) => 
    (QueryAction=FormitemQueryAction, ActionValidator=FormitemQueryActionValidator) => {
        const FormitemLazyResult = ({id, children, ...props}) => {
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
                    <Component formitem={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formitem' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormitemLazyResult
}
