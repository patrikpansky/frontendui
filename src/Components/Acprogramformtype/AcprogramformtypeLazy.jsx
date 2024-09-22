
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramformtypeLargeCard as LargeCard } from "./AcprogramformtypeLargeCard";

export const AcprogramformtypeLazyQueryFragment = `
fragment AcprogramformtypeMediumCardFragment on AcprogramformtypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramformtypeLazyQuery = `
    query acprogramformtypeById($id: UUID!) {
        result: acprogramformtypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramformtypeQueryAction = CreateAsyncActionFromQuery(AcprogramformtypeLazyQuery);
export const AcprogramformtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramformtype'", success: "Načtení 'acprogramformtype' se povedlo"})

export const AcprogramformtypeLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramformtypeQueryAction, ActionValidator=AcprogramformtypeQueryActionValidator) => {
        const AcprogramformtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramformtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramformtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramformtypeLazyResult
}
