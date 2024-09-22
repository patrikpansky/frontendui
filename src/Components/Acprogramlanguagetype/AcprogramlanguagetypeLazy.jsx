
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramlanguagetypeLargeCard as LargeCard } from "./AcprogramlanguagetypeLargeCard";

export const AcprogramlanguagetypeLazyQueryFragment = `
fragment AcprogramlanguagetypeMediumCardFragment on AcprogramlanguagetypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramlanguagetypeLazyQuery = `
    query acprogramlanguagetypeById($id: UUID!) {
        result: acprogramlanguagetypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramlanguagetypeQueryAction = CreateAsyncActionFromQuery(AcprogramlanguagetypeLazyQuery);
export const AcprogramlanguagetypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramlanguagetype'", success: "Načtení 'acprogramlanguagetype' se povedlo"})

export const AcprogramlanguagetypeLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramlanguagetypeQueryAction, ActionValidator=AcprogramlanguagetypeQueryActionValidator) => {
        const AcprogramlanguagetypeLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramlanguagetype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramlanguagetype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramlanguagetypeLazyResult
}
