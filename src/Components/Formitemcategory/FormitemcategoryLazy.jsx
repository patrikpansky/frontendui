
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormitemcategoryLargeCard as LargeCard } from "./FormitemcategoryLargeCard";

export const FormitemcategoryLazyQueryFragment = `
fragment FormitemcategoryMediumCardFragment on FormitemcategoryGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const FormitemcategoryLazyQuery = `
    query formitemcategoryById($id: UUID!) {
        result: formitemcategoryById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }`


export const FormitemcategoryQueryAction = CreateAsyncActionFromQuery(FormitemcategoryLazyQuery);
export const FormitemcategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formitemcategory'", success: "Načtení 'formitemcategory' se povedlo"})

export const FormitemcategoryLazy = (Component=LargeCard) => 
    (QueryAction=FormitemcategoryQueryAction, ActionValidator=FormitemcategoryQueryActionValidator) => {
        const FormitemcategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component formitemcategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formitemcategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormitemcategoryLazyResult
}
