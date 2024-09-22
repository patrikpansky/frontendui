
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { MembershipLargeCard as LargeCard } from "./MembershipLargeCard";

export const MembershipLazyQueryFragment = `
fragment MembershipMediumCardFragment on MembershipGQLModel {
        id
        created
        lastchange
        valid
        startdate
        enddate
    }`

export const MembershipLazyQuery = `
    query membershipById($id: UUID!) {
        result: membershipById(id: $id) {
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
    }`


export const MembershipQueryAction = CreateAsyncActionFromQuery(MembershipLazyQuery);
export const MembershipQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'membership'", success: "Načtení 'membership' se povedlo"})

export const MembershipLazy = (Component=LargeCard) => 
    (QueryAction=MembershipQueryAction, ActionValidator=MembershipQueryActionValidator) => {
        const MembershipLazyResult = ({id, children, ...props}) => {
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
                    <Component membership={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'membership' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return MembershipLazyResult
}
