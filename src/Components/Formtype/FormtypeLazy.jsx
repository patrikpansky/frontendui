
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormtypeLargeCard as LargeCard } from "./FormtypeLargeCard";

export const FormtypeLazyQueryFragment = `
fragment FormtypeMediumCardFragment on FormtypeGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const FormtypeLazyQuery = `
    query formtypeById($id: UUID!) {
        result: formtypeById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }`


export const FormtypeQueryAction = CreateAsyncActionFromQuery(FormtypeLazyQuery);
export const FormtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formtype'", success: "Načtení 'formtype' se povedlo"})

export const FormtypeLazy = (Component=LargeCard) => 
    (QueryAction=FormtypeQueryAction, ActionValidator=FormtypeQueryActionValidator) => {
        const FormtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component formtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormtypeLazyResult
}
