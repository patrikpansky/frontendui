
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ProjectcategoryLargeCard as LargeCard } from "./ProjectcategoryLargeCard";

export const ProjectcategoryLazyQueryFragment = `
fragment ProjectcategoryMediumCardFragment on ProjectcategoryGQLModel {
        id
        name
        nameEn
        lastchange
        created
    }`

export const ProjectcategoryLazyQuery = `
    query projectcategoryById($id: UUID!) {
        result: projectcategoryById(id: $id) {
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }`


export const ProjectcategoryQueryAction = CreateAsyncActionFromQuery(ProjectcategoryLazyQuery);
export const ProjectcategoryQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'projectcategory'", success: "Načtení 'projectcategory' se povedlo"})

export const ProjectcategoryLazy = (Component=LargeCard) => 
    (QueryAction=ProjectcategoryQueryAction, ActionValidator=ProjectcategoryQueryActionValidator) => {
        const ProjectcategoryLazyResult = ({id, children, ...props}) => {
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
                    <Component projectcategory={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'projectcategory' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ProjectcategoryLazyResult
}
