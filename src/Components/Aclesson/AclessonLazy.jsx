
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AclessonLargeCard as LargeCard } from "./AclessonLargeCard";

export const AclessonLazyQueryFragment = `
fragment AclessonMediumCardFragment on AclessonGQLModel {
        id
        name
        nameEn
        created
        lastchange
        count
    }`

export const AclessonLazyQuery = `
    query aclessonById($id: UUID!) {
        result: aclessonById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
            count
        }
    }`


export const AclessonQueryAction = CreateAsyncActionFromQuery(AclessonLazyQuery);
export const AclessonQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'aclesson'", success: "Načtení 'aclesson' se povedlo"})

export const AclessonLazy = (Component=LargeCard) => 
    (QueryAction=AclessonQueryAction, ActionValidator=AclessonQueryActionValidator) => {
        const AclessonLazyResult = ({id, children, ...props}) => {
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
                    <Component aclesson={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'aclesson' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AclessonLazyResult
}
