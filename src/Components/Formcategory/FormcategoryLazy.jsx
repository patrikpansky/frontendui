
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormcategoryLargeCard as LargeCard } from "./FormcategoryLargeCard";

export const FormcategoryLazyQueryFragment = `
fragment FormcategoryMediumCardFragment on FormcategoryGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const FormcategoryLazyQuery = `
    query formcategoryById($id: UUID!) {
        result: formcategoryById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }`


export const FormcategoryQueryAction = CreateAsyncActionFromQuery(FormcategoryLazyQuery);
export const FormcategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formcategory'", success: "Načtení 'formcategory' se povedlo"})

export const FormcategoryLazy = (Component=LargeCard) => 
    (QueryAction=FormcategoryQueryAction, ActionValidator=FormcategoryQueryActionValidator) => {
        const FormcategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component formcategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formcategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormcategoryLazyResult
}
