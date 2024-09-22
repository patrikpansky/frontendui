
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RbacobjectLargeCard as LargeCard } from "./RbacobjectLargeCard";

export const RbacobjectLazyQueryFragment = `
fragment RbacobjectMediumCardFragment on RbacobjectGQLModel {
        id
    }`

export const RbacobjectLazyQuery = `
    query rbacobjectById($id: UUID!) {
        result: rbacobjectById(id: $id) {
            __typename
            id
        }
    }`


export const RbacobjectQueryAction = CreateAsyncActionFromQuery(RbacobjectLazyQuery);
export const RbacobjectQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'rbacobject'", success: "Načtení 'rbacobject' se povedlo"})

export const RbacobjectLazy = (Component=LargeCard) => 
    (QueryAction=RbacobjectQueryAction, ActionValidator=RbacobjectQueryActionValidator) => {
        const RbacobjectLazyResult = ({id, children, ...props}) => {
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
                    <Component rbacobject={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'rbacobject' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RbacobjectLazyResult
}
