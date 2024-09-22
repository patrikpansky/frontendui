
import { useState, useEffect } from "react"
import { json, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useFreshItem, useDispatch } from "@hrbolek/uoisfrontend-shared/src"

import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

import { AcclassificationtypeLargeCard as LargeCard } from "./AcclassificationtypeLargeCard";

export const AcclassificationtypeLazyQueryFragment = `
fragment AcclassificationtypeMediumCardFragment on AcclassificationtypeGQLModel {
        id
        name
        nameEn
        created
        lastchange
    }`

export const AcclassificationtypeLazyQuery = `
    query acclassificationtypeById($id: UUID!) {
        result: acclassificationtypeById(id: $id) {
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }`


export const AcclassificationtypeQueryAction = CreateAsyncActionFromQuery(AcclassificationtypeLazyQuery);
export const AcclassificationtypeQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acclassificationtype'", success: "Načtení 'acclassificationtype' se povedlo"})

export const AcclassificationtypeLazy = (Component=LargeCard) => 
    (QueryAction=AcclassificationtypeQueryAction, ActionValidator=AcclassificationtypeQueryActionValidator) => {
        const AcclassificationtypeLazyResult = ({id, children, ...props}) => {
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
                    <Component acclassificationtype={data}>
                        {children}
                    </Component>
                );    
            } 
            return (<div>Entita 'acclassificationtype' s id {id} nenalezena...< br/> {JSON.stringify(json, null, 4)}</div>)
        }
        return AcclassificationtypeLazyResult
}
