
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FacilityLargeCard as LargeCard } from "./FacilityLargeCard";

export const FacilityLazyQueryFragment = `
fragment FacilityMediumCardFragment on FacilityGQLModel {
        id
        name
        nameEn
        lastchange
        created
        label
        address
        valid
        capacity
        geometry
        geolocation
    }`

export const FacilityLazyQuery = `
    query facilityById($id: UUID!) {
        result: facilityById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
            label
            address
            valid
            capacity
            geometry
            geolocation
        }
    }`


export const FacilityQueryAction = CreateAsyncActionFromQuery(FacilityLazyQuery);
export const FacilityQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'facility'", success: "Načtení 'facility' se povedlo"})

export const FacilityLazy = (Component=LargeCard) => 
    (QueryAction=FacilityQueryAction, ActionValidator=FacilityQueryActionValidator) => {
        const FacilityLazyResult = ({id, children, ...props}) => {
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
                    <Component facility={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'facility' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FacilityLazyResult
}
