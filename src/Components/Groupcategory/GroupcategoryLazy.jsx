
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { GroupcategoryLargeCard as LargeCard } from "./GroupcategoryLargeCard";

export const GroupcategoryLazyQueryFragment = `
fragment GroupcategoryMediumCardFragment on GroupcategoryGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const GroupcategoryLazyQuery = `
    query groupcategoryById($id: UUID!) {
        result: groupcategoryById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }`


export const GroupcategoryQueryAction = CreateAsyncActionFromQuery(GroupcategoryLazyQuery);
export const GroupcategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'groupcategory'", success: "Načtení 'groupcategory' se povedlo"})

export const GroupcategoryLazy = (Component=LargeCard) => 
    (QueryAction=GroupcategoryQueryAction, ActionValidator=GroupcategoryQueryActionValidator) => {
        const GroupcategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component groupcategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'groupcategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return GroupcategoryLazyResult
}
