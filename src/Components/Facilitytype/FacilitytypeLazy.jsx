
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FacilitytypeLargeCard as LargeCard } from "./FacilitytypeLargeCard";

export const FacilitytypeLazyQueryFragment = `
fragment FacilitytypeMediumCardFragment on FacilitytypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const FacilitytypeLazyQuery = `
    query facilitytypeById($id: UUID!) {
        result: facilitytypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const FacilitytypeQueryAction = CreateAsyncActionFromQuery(FacilitytypeLazyQuery);
export const FacilitytypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'facilitytype'", success: "Načtení 'facilitytype' se povedlo"})

export const FacilitytypeLazy = (Component=LargeCard) => 
    (QueryAction=FacilitytypeQueryAction, ActionValidator=FacilitytypeQueryActionValidator) => {
        const FacilitytypeLazyResult = ({id, children, ...props}) => {
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
                    <Component facilitytype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'facilitytype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FacilitytypeLazyResult
}
