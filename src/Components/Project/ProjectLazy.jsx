
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ProjectLargeCard as LargeCard } from "./ProjectLargeCard";

export const ProjectLazyQueryFragment = `
fragment ProjectMediumCardFragment on ProjectGQLModel {
        id
        name
        startdate
        enddate
        created
        lastchange
        valid
    }`

export const ProjectLazyQuery = `
    query projectById($id: UUID!) {
        result: projectById(id: $id) {
            __typename
            id
            name
            startdate
            enddate
            created
            lastchange
            valid
        }
    }`


export const ProjectQueryAction = CreateAsyncActionFromQuery(ProjectLazyQuery);
export const ProjectQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'project'", success: "Načtení 'project' se povedlo"})

export const ProjectLazy = (Component=LargeCard) => 
    (QueryAction=ProjectQueryAction, ActionValidator=ProjectQueryActionValidator) => {
        const ProjectLazyResult = ({id, children, ...props}) => {
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
                    <Component project={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'project' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ProjectLazyResult
}
