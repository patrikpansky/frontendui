
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramLargeCard as LargeCard } from "./AcprogramLargeCard";

export const AcprogramLazyQueryFragment = `
fragment AcprogramMediumCardFragment on AcprogramGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramLazyQuery = `
    query acprogramById($id: UUID!) {
        result: acprogramById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramQueryAction = CreateAsyncActionFromQuery(AcprogramLazyQuery);
export const AcprogramQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogram'", success: "Načtení 'acprogram' se povedlo"})

export const AcprogramLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramQueryAction, ActionValidator=AcprogramQueryActionValidator) => {
        const AcprogramLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogram={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogram' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramLazyResult
}
