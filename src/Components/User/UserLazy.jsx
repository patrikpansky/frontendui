
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { UserLargeCard as LargeCard } from "./UserLargeCard";

export const UserLazyQueryFragment = `
fragment UserMediumCardFragment on UserGQLModel {
        id
        created
        lastchange
        name
        firstname
        surname
        fullname
        email
        valid
        isThisMe
        gdpr
    }`

export const UserLazyQuery = `
    query userById($id: UUID!) {
        result: userById(id: $id) {
            __typename
            id
            created
            lastchange
            name
            firstname
            surname
            fullname
            email
            valid
            isThisMe
            gdpr
        }
    }`


export const UserQueryAction = CreateAsyncActionFromQuery(UserLazyQuery);
export const UserQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'user'", success: "Načtení 'user' se povedlo"})

export const UserLazy = (Component=LargeCard) => 
    (QueryAction=UserQueryAction, ActionValidator=UserQueryActionValidator) => {
        const UserLazyResult = ({id, children, ...props}) => {
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
                    <Component user={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'user' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return UserLazyResult
}
