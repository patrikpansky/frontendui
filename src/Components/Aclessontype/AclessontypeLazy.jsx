
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AclessontypeLargeCard as LargeCard } from "./AclessontypeLargeCard";

export const AclessontypeLazyQueryFragment = `
fragment AclessontypeMediumCardFragment on AclessontypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AclessontypeLazyQuery = `
    query aclessontypeById($id: UUID!) {
        result: aclessontypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AclessontypeQueryAction = CreateAsyncActionFromQuery(AclessontypeLazyQuery);
export const AclessontypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'aclessontype'", success: "Načtení 'aclessontype' se povedlo"})

export const AclessontypeLazy = (Component=LargeCard) => 
    (QueryAction=AclessontypeQueryAction, ActionValidator=AclessontypeQueryActionValidator) => {
        const AclessontypeLazyResult = ({id, children, ...props}) => {
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
                    <Component aclessontype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'aclessontype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AclessontypeLazyResult
}
