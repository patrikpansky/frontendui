
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcsubjectLargeCard as LargeCard } from "./AcsubjectLargeCard";

export const AcsubjectLazyQueryFragment = `
fragment AcsubjectMediumCardFragment on AcsubjectGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcsubjectLazyQuery = `
    query acsubjectById($id: UUID!) {
        result: acsubjectById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcsubjectQueryAction = CreateAsyncActionFromQuery(AcsubjectLazyQuery);
export const AcsubjectQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acsubject'", success: "Načtení 'acsubject' se povedlo"})

export const AcsubjectLazy = (Component=LargeCard) => 
    (QueryAction=AcsubjectQueryAction, ActionValidator=AcsubjectQueryActionValidator) => {
        const AcsubjectLazyResult = ({id, children, ...props}) => {
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
                    <Component acsubject={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acsubject' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcsubjectLazyResult
}
