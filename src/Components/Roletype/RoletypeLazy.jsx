
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RoletypeLargeCard as LargeCard } from "./RoletypeLargeCard";

export const RoletypeLazyQueryFragment = `
fragment RoletypeMediumCardFragment on RoletypeGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const RoletypeLazyQuery = `
    query roletypeById($id: UUID!) {
        result: roletypeById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }`


export const RoletypeQueryAction = CreateAsyncActionFromQuery(RoletypeLazyQuery);
export const RoletypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'roletype'", success: "Načtení 'roletype' se povedlo"})

export const RoletypeLazy = (Component=LargeCard) => 
    (QueryAction=RoletypeQueryAction, ActionValidator=RoletypeQueryActionValidator) => {
        const RoletypeLazyResult = ({id, children, ...props}) => {
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
                    <Component roletype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'roletype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RoletypeLazyResult
}
