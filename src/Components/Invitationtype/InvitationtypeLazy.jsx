
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { InvitationtypeLargeCard as LargeCard } from "./InvitationtypeLargeCard";

export const InvitationtypeLazyQueryFragment = `
fragment InvitationtypeMediumCardFragment on InvitationtypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const InvitationtypeLazyQuery = `
    query invitationtypeById($id: UUID!) {
        result: invitationtypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const InvitationtypeQueryAction = CreateAsyncActionFromQuery(InvitationtypeLazyQuery);
export const InvitationtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'invitationtype'", success: "Načtení 'invitationtype' se povedlo"})

export const InvitationtypeLazy = (Component=LargeCard) => 
    (QueryAction=InvitationtypeQueryAction, ActionValidator=InvitationtypeQueryActionValidator) => {
        const InvitationtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component invitationtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'invitationtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return InvitationtypeLazyResult
}
