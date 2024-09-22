
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcsemesterLargeCard as LargeCard } from "./AcsemesterLargeCard";

export const AcsemesterLazyQueryFragment = `
fragment AcsemesterMediumCardFragment on AcsemesterGQLModel {
        id
        created
        lastchange
        order
    }`

export const AcsemesterLazyQuery = `
    query acsemesterById($id: UUID!) {
        result: acsemesterById(id: $id) {
            __typename
            id
            created
            lastchange
            order
        }
    }`


export const AcsemesterQueryAction = CreateAsyncActionFromQuery(AcsemesterLazyQuery);
export const AcsemesterQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acsemester'", success: "Načtení 'acsemester' se povedlo"})

export const AcsemesterLazy = (Component=LargeCard) => 
    (QueryAction=AcsemesterQueryAction, ActionValidator=AcsemesterQueryActionValidator) => {
        const AcsemesterLazyResult = ({id, children, ...props}) => {
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
                    <Component acsemester={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acsemester' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcsemesterLazyResult
}
