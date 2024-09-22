
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { SurveyLargeCard as LargeCard } from "./SurveyLargeCard";

export const SurveyLazyQueryFragment = `
fragment SurveyMediumCardFragment on SurveyGQLModel {
        id
        name
        lastchange
        created
    }`

export const SurveyLazyQuery = `
    query surveyById($id: UUID!) {
        result: surveyById(id: $id) {
            __typename
            id
            name
            lastchange
            created
        }
    }`


export const SurveyQueryAction = CreateAsyncActionFromQuery(SurveyLazyQuery);
export const SurveyQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'survey'", success: "Načtení 'survey' se povedlo"})

export const SurveyLazy = (Component=LargeCard) => 
    (QueryAction=SurveyQueryAction, ActionValidator=SurveyQueryActionValidator) => {
        const SurveyLazyResult = ({id, children, ...props}) => {
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
                    <Component survey={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'survey' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return SurveyLazyResult
}
