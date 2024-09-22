
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramleveltypeLargeCard as LargeCard } from "./AcprogramleveltypeLargeCard";

export const AcprogramleveltypeLazyQueryFragment = `
fragment AcprogramleveltypeMediumCardFragment on AcprogramleveltypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramleveltypeLazyQuery = `
    query acprogramleveltypeById($id: UUID!) {
        result: acprogramleveltypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramleveltypeQueryAction = CreateAsyncActionFromQuery(AcprogramleveltypeLazyQuery);
export const AcprogramleveltypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramleveltype'", success: "Načtení 'acprogramleveltype' se povedlo"})

export const AcprogramleveltypeLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramleveltypeQueryAction, ActionValidator=AcprogramleveltypeQueryActionValidator) => {
        const AcprogramleveltypeLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramleveltype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramleveltype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramleveltypeLazyResult
}
