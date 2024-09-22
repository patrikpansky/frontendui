
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { GrouptypeLargeCard as LargeCard } from "./GrouptypeLargeCard";

export const GrouptypeLazyQueryFragment = `
fragment GrouptypeMediumCardFragment on GrouptypeGQLModel {
        id
        created
        lastchange
        name
        nameEn
    }`

export const GrouptypeLazyQuery = `
    query grouptypeById($id: UUID!) {
        result: grouptypeById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }`


export const GrouptypeQueryAction = CreateAsyncActionFromQuery(GrouptypeLazyQuery);
export const GrouptypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'grouptype'", success: "Načtení 'grouptype' se povedlo"})

export const GrouptypeLazy = (Component=LargeCard) => 
    (QueryAction=GrouptypeQueryAction, ActionValidator=GrouptypeQueryActionValidator) => {
        const GrouptypeLazyResult = ({id, children, ...props}) => {
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
                    <Component grouptype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'grouptype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return GrouptypeLazyResult
}
