
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RoletypelistLargeCard as LargeCard } from "./RoletypelistLargeCard";

export const RoletypelistLazyQueryFragment = `
fragment RoletypelistMediumCardFragment on RoletypelistGQLModel {
        id
        created
        lastchange
    }`

export const RoletypelistLazyQuery = `
    query roletypelistById($id: UUID!) {
        result: roletypelistById(id: $id) {
            __typename
            id
            created
            lastchange
        }
    }`


export const RoletypelistQueryAction = CreateAsyncActionFromQuery(RoletypelistLazyQuery);
export const RoletypelistQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'roletypelist'", success: "Načtení 'roletypelist' se povedlo"})

export const RoletypelistLazy = (Component=LargeCard) => 
    (QueryAction=RoletypelistQueryAction, ActionValidator=RoletypelistQueryActionValidator) => {
        const RoletypelistLazyResult = ({id, children, ...props}) => {
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
                    <Component roletypelist={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'roletypelist' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RoletypelistLazyResult
}
