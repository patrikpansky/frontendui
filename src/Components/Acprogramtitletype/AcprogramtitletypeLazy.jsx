
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcprogramtitletypeLargeCard as LargeCard } from "./AcprogramtitletypeLargeCard";

export const AcprogramtitletypeLazyQueryFragment = `
fragment AcprogramtitletypeMediumCardFragment on AcprogramtitletypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcprogramtitletypeLazyQuery = `
    query acprogramtitletypeById($id: UUID!) {
        result: acprogramtitletypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcprogramtitletypeQueryAction = CreateAsyncActionFromQuery(AcprogramtitletypeLazyQuery);
export const AcprogramtitletypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramtitletype'", success: "Načtení 'acprogramtitletype' se povedlo"})

export const AcprogramtitletypeLazy = (Component=LargeCard) => 
    (QueryAction=AcprogramtitletypeQueryAction, ActionValidator=AcprogramtitletypeQueryActionValidator) => {
        const AcprogramtitletypeLazyResult = ({id, children, ...props}) => {
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
                    <Component acprogramtitletype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acprogramtitletype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcprogramtitletypeLazyResult
}
