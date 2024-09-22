import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const {{Name name}}LoadMoreButtonFragment = `
fragment {{Name name}}LoadMoreButtonFragment on {{Name name}}GQLModel {
        id
{{#each targetType.fields }}
    {{#if isVector}} 
        {{./name}} { 
        {{#each targetType.fields }}
            {{#if isScalar}}
            {{./name}}
            {{/if}}
        {{/each}}
        }
    {{/if}}
{{/each}}    
    }`

export const {{Name name}}LoadMoreButton = ({ {{name name}}s, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if ({{name name}}s.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

