
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramtypeLargeCard as LargeCard } from "./AcprogramtypeLargeCard";

export const AcprogramtypeLazyQueryFragment = `
fragment AcprogramtypeMediumCardFragment on AcprogramtypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramtypeLazyQuery = `
    query acprogramtypeById($id: UUID!) {
        result: acprogramtypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramtypeQueryAction = CreateAsyncActionFromQuery(AcprogramtypeLazyQuery);
export const AcprogramtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramtype'", success: "Načtení 'acprogramtype' se povedlo"})

export const AcprogramtypeLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramtypeQueryAction, ActionValidator=AcprogramtypeQueryActionValidator) => {
        const AcprogramtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramtypeLazyResult
}
