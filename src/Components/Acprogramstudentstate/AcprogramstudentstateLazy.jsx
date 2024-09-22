
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramstudentstateLargeCard as LargeCard } from "./AcprogramstudentstateLargeCard";

export const AcprogramstudentstateLazyQueryFragment = `
fragment AcprogramstudentstateMediumCardFragment on AcprogramstudentstateGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramstudentstateLazyQuery = `
    query acprogramstudentstateById($id: UUID!) {
        result: acprogramstudentstateById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramstudentstateQueryAction = CreateAsyncActionFromQuery(AcprogramstudentstateLazyQuery);
export const AcprogramstudentstateQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramstudentstate'", success: "Načtení 'acprogramstudentstate' se povedlo"})

export const AcprogramstudentstateLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramstudentstateQueryAction, ActionValidator=AcprogramstudentstateQueryActionValidator) => {
        const AcprogramstudentstateLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramstudentstate={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramstudentstate' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramstudentstateLazyResult
}
