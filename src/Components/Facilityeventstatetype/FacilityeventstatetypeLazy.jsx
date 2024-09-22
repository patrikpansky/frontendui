
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { FacilityeventstatetypeLargeCard as LargeCard } from "./FacilityeventstatetypeLargeCard";

export const FacilityeventstatetypeLazyQueryFragment = `
fragment FacilityeventstatetypeMediumCardFragment on FacilityeventstatetypeGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const FacilityeventstatetypeLazyQuery = `
    query facilityeventstatetypeById($id: UUID!) {
        result: facilityeventstatetypeById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const FacilityeventstatetypeQueryAction = CreateAsyncActionFromQuery(FacilityeventstatetypeLazyQuery);
export const FacilityeventstatetypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'facilityeventstatetype'", success: "Načtení 'facilityeventstatetype' se povedlo"})

export const FacilityeventstatetypeLazy = (Component=LargeCard) => 
    (QueryAction=FacilityeventstatetypeQueryAction, ActionValidator=FacilityeventstatetypeQueryActionValidator) => {
        const FacilityeventstatetypeLazyResult = ({id, children, ...props}) => {
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
                    <Component facilityeventstatetype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'facilityeventstatetype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return FacilityeventstatetypeLazyResult
}
