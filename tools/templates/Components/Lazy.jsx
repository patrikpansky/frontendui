
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { {{Name name}}LargeCard as LargeCard } from "./{{Name name}}LargeCard";

export const {{Name name}}LazyQueryFragment = `
fragment {{Name name}}MediumCardFragment on {{Name name}}GQLModel {
    {{#each returnType.fields }}
    {{#if isScalar}}
        {{./name}}
    {{/if}}
    {{/each}}
    }`

export const {{Name name}}LazyQuery = `
    query {{name name}}ById($id: UUID!) {
        result: {{name name}}ById(id: $id) {
            __typename
    {{#each returnType.fields }}
        {{#if isScalar}}
            {{./name}}
        {{/if}}
    {{/each}}        
        }
    }`


export const {{Name name}}QueryAction = CreateAsyncActionFromQuery({{Name name}}LazyQuery);
export const {{Name name}}QueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst '{{name name}}'", success: "Načtení '{{name name}}' se povedlo"})

export const {{Name name}}Lazy = (Component=LargeCard) => 
    (QueryAction={{Name name}}QueryAction, ActionValidator={{Name name}}QueryActionValidator) => {
        const {{Name name}}LazyResult = ({id, children, ...props}) => {
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
                    <Component {{name name}}={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita '{{name name}}' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return {{Name name}}LazyResult
}
