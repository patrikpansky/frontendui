
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormLargeCard as LargeCard } from "./FormLargeCard";

export const FormLazyQueryFragment = `
fragment FormMediumCardFragment on FormGQLModel {
        id
        name
        lastchange
        created
        nameEn
        valid
        status
    }`

export const FormLazyQuery = `
    query formById($id: UUID!) {
        result: formById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
            valid
            status
        }
    }`


export const FormQueryAction = CreateAsyncActionFromQuery(FormLazyQuery);
export const FormQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'form'", success: "Načtení 'form' se povedlo"})

export const FormLazy = (Component=LargeCard) => 
    (QueryAction=FormQueryAction, ActionValidator=FormQueryActionValidator) => {
        const FormLazyResult = ({id, children, ...props}) => {
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
                    <Component form={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'form' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormLazyResult
}
