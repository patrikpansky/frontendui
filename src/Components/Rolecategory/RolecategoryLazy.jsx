
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RolecategoryLargeCard as LargeCard } from "./RolecategoryLargeCard";

export const RolecategoryLazyQueryFragment = `
fragment RolecategoryMediumCardFragment on RolecategoryGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const RolecategoryLazyQuery = `
    query rolecategoryById($id: UUID!) {
        result: rolecategoryById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }`


export const RolecategoryQueryAction = CreateAsyncActionFromQuery(RolecategoryLazyQuery);
export const RolecategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'rolecategory'", success: "Načtení 'rolecategory' se povedlo"})

export const RolecategoryLazy = (Component=LargeCard) => 
    (QueryAction=RolecategoryQueryAction, ActionValidator=RolecategoryQueryActionValidator) => {
        const RolecategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component rolecategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'rolecategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RolecategoryLazyResult
}
