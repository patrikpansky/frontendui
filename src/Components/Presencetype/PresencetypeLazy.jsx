
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { PresencetypeLargeCard as LargeCard } from "./PresencetypeLargeCard";

export const PresencetypeLazyQueryFragment = `
fragment PresencetypeMediumCardFragment on PresencetypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const PresencetypeLazyQuery = `
    query presencetypeById($id: UUID!) {
        result: presencetypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const PresencetypeQueryAction = CreateAsyncActionFromQuery(PresencetypeLazyQuery);
export const PresencetypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'presencetype'", success: "Načtení 'presencetype' se povedlo"})

export const PresencetypeLazy = (Component=LargeCard) => 
    (QueryAction=PresencetypeQueryAction, ActionValidator=PresencetypeQueryActionValidator) => {
        const PresencetypeLazyResult = ({id, children, ...props}) => {
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
                    <Component presencetype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'presencetype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return PresencetypeLazyResult
}
