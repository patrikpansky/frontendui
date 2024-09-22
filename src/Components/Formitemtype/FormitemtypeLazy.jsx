
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FormitemtypeLargeCard as LargeCard } from "./FormitemtypeLargeCard";

export const FormitemtypeLazyQueryFragment = `
fragment FormitemtypeMediumCardFragment on FormitemtypeGQLModel {
        id
        name
        lastchange
        created
        nameEn
    }`

export const FormitemtypeLazyQuery = `
    query formitemtypeById($id: UUID!) {
        result: formitemtypeById(id: $id) {
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }`


export const FormitemtypeQueryAction = CreateAsyncActionFromQuery(FormitemtypeLazyQuery);
export const FormitemtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formitemtype'", success: "Načtení 'formitemtype' se povedlo"})

export const FormitemtypeLazy = (Component=LargeCard) => 
    (QueryAction=FormitemtypeQueryAction, ActionValidator=FormitemtypeQueryActionValidator) => {
        const FormitemtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component formitemtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'formitemtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FormitemtypeLazyResult
}
