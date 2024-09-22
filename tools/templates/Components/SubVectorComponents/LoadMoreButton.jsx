import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { 
    CreateAsyncActionFromQuery,
//    CreateAsyncQueryValidator,
    GQLQueryLazyVectorAfterFetch as UpdateVectorAfterFetch
} from "@hrbolek/uoisfrontend-shared/src"

//{{{./masterType.returnTypeName}}}
//{{{keys .}}}
//{{{./targetType.returnTypeName}}}
//{{{keys argByName}}}
//{{{keys ./argByName}}}

/**
 * {{ Name masterType.name }}.{{./name}}
 * {{description}}
 * returns List[{{./targetType.returnTypeName}}]
 * {{argByName.where.name}} : {{argByName.where.targetType.returnTypeName}}
 * arguments
{{#each args}}
 * {{./name}} : {{targetTypeName.returnTypeName}}
{{/each}}
 */
export const {{ Name masterType.name }}{{Name name}}Query = `
query {{ Name masterType.name }}{{Name name}}($id: UUID!, $skip: Int, $limit: Int, $where: {{argByName.where.targetType.returnTypeName}}) {
    result: {{ name masterType.name }}ById(id: $id) {
        id
        {{./name}}(skip: $skip, limit: $limit, where: $where) {
            __typename
    {{#each targetType.fields}}            
        {{#if isScalar}}
            {{./name}}
        {{/if}}
    {{/each}}
        }   
    }
}
`
export const {{ Name masterType.name }}{{Name name}}QueryAction = CreateAsyncActionFromQuery({{ Name masterType.name }}{{Name name}}Query, {}, UpdateVectorAfterFetch("{{./name}}"))

export const {{ Name masterType.name }}{{Name name}}LoadMoreButton = ({ {{ name masterType.name }}, limit=10, where, action={{ Name masterType.name }}{{Name name}}QueryAction, children }) => {
    const [_state, _setState] = useState(
        { skip: 0, limit: limit, more: true, loading: false, errors: null }
    )
    const dispatch = useDispatch()
    const onLoadMore = async () => {
        const jsondata = await dispatch(action({...{{ name masterType.name }}, limit: _state.limit, skip: _state.skip, where: where}))
        const {data, errors} = jsondata
        if (errors) {
            const newState = {..._state, errors: errors, loading: false }
            _setState(newState)
        } else {
            const result = data?.result || {}
            const vector = Object.values(result) || []
            const newState = {
                more: vector?.length === _state.limit,
                limit: _state.limit,
                skip: (vector?.length === _state.limit)?_state.limit+_state.skip:(_state.limit + vector?.length || 0),
                loading: false
            }
            _setState(newState)
        }
    }
    const className = "btn btn-outline-success w-100";
    if (_state.errors) {
        return (<>
            <button className={className} onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"} </button>
            Došlo k chybě:<hr/>
            {JSON.stringify(_state.errors)}
            <hr/>
        </>)
    }
    if (_state.loading) {
        return <button className={className}>Nahrávám</button>
    }
    if (_state.more) {
        return <button className={className} onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
    } else {
        return <button className={className} onClick={(e)=>{e.target.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>            
    }
    
}

