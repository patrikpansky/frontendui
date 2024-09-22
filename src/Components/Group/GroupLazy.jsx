
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { GroupLargeCard as LargeCard } from "./GroupLargeCard";

export const GroupLazyQueryFragment = `
fragment GroupMediumCardFragment on GroupGQLModel {
        id
        created
        lastchange
        name
        nameEn
        email
        abbreviation
        valid
        typeId
    }`

export const GroupLazyQuery = `
    query groupById($id: UUID!) {
        result: groupById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
    }`


export const GroupQueryAction = CreateAsyncActionFromQuery(GroupLazyQuery);
export const GroupQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'group'", success: "Načtení 'group' se povedlo"})

export const GroupLazy = (Component=LargeCard) => 
    (QueryAction=GroupQueryAction, ActionValidator=GroupQueryActionValidator) => {
        const GroupLazyResult = ({id, children, ...props}) => {
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
                    <Component group={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'group' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return GroupLazyResult
}
