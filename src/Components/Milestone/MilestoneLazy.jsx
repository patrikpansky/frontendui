
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { MilestoneLargeCard as LargeCard } from "./MilestoneLargeCard";

export const MilestoneLazyQueryFragment = `
fragment MilestoneMediumCardFragment on MilestoneGQLModel {
        id
        name
        startdate
        enddate
        lastchange
        created
        valid
    }`

export const MilestoneLazyQuery = `
    query milestoneById($id: UUID!) {
        result: milestoneById(id: $id) {
            __typename
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
    }`


export const MilestoneQueryAction = CreateAsyncActionFromQuery(MilestoneLazyQuery);
export const MilestoneQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'milestone'", success: "Načtení 'milestone' se povedlo"})

export const MilestoneLazy = (Component=LargeCard) => 
    (QueryAction=MilestoneQueryAction, ActionValidator=MilestoneQueryActionValidator) => {
        const MilestoneLazyResult = ({id, children, ...props}) => {
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
                    <Component milestone={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'milestone' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return MilestoneLazyResult
}
