
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { RoleLargeCard as LargeCard } from "./RoleLargeCard";

export const RoleLazyQueryFragment = `
fragment RoleMediumCardFragment on RoleGQLModel {
        id
        created
        lastchange
        valid
        startdate
        enddate
    }`

export const RoleLazyQuery = `
    query roleById($id: UUID!) {
        result: roleById(id: $id) {
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
    }`


export const RoleQueryAction = CreateAsyncActionFromQuery(RoleLazyQuery);
export const RoleQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'role'", success: "Načtení 'role' se povedlo"})

export const RoleLazy = (Component=LargeCard) => 
    (QueryAction=RoleQueryAction, ActionValidator=RoleQueryActionValidator) => {
        const RoleLazyResult = ({id, children, ...props}) => {
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
                    <Component role={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'role' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return RoleLazyResult
}
