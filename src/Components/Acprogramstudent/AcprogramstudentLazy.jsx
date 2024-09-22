
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramstudentLargeCard as LargeCard } from "./AcprogramstudentLargeCard";

export const AcprogramstudentLazyQueryFragment = `
fragment AcprogramstudentMediumCardFragment on AcprogramstudentGQLModel {
        id
        created
        lastchange
        semester
    }`

export const AcprogramstudentLazyQuery = `
    query acprogramstudentById($id: UUID!) {
        result: acprogramstudentById(id: $id) {
            __typename
            id
            created
            lastchange
            semester
        }
    }`


export const AcprogramstudentQueryAction = CreateAsyncActionFromQuery(AcprogramstudentLazyQuery);
export const AcprogramstudentQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramstudent'", success: "Načtení 'acprogramstudent' se povedlo"})

export const AcprogramstudentLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramstudentQueryAction, ActionValidator=AcprogramstudentQueryActionValidator) => {
        const AcprogramstudentLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramstudent={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramstudent' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramstudentLazyResult
}
