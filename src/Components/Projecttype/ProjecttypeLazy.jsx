
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { ProjecttypeLargeCard as LargeCard } from "./ProjecttypeLargeCard";

export const ProjecttypeLazyQueryFragment = `
fragment ProjecttypeMediumCardFragment on ProjecttypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
        valid
    }`

export const ProjecttypeLazyQuery = `
    query projecttypeById($id: UUID!) {
        result: projecttypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
            valid
        }
    }`


export const ProjecttypeQueryAction = CreateAsyncActionFromQuery(ProjecttypeLazyQuery);
export const ProjecttypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'projecttype'", success: "Načtení 'projecttype' se povedlo"})

export const ProjecttypeLazy = (Component=LargeCard) => 
    (QueryAction=ProjecttypeQueryAction, ActionValidator=ProjecttypeQueryActionValidator) => {
        const ProjecttypeLazyResult = ({id, children, ...props}) => {
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
                    <Component projecttype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'projecttype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return ProjecttypeLazyResult
}
