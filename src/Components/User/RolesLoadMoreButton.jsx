import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { 
    CreateAsyncActionFromQuery,
//    CreateAsyncQueryValidator,
    GQLQueryLazyVectorAfterFetch as UpdateVectorAfterFetch
} from "@hrbolek/uoisfrontend-shared/src"

//UserGQLModel
//["name","description","args","type","isDeprecated","deprecationReason","argByName","targetType","returnType","returnTypeName","returnShortName","isScalar","isVector","isObject","masterType"]
//RoleGQLModel
//["skip","limit","orderby","where"]
//["skip","limit","orderby","where"]

/**
 * User.roles
 * User&#x27;s roles (like Dean)
 * returns List[RoleGQLModel]
 * where : RoleInputWhereFilter
 * arguments
 * skip : 
 * limit : 
 * orderby : 
 * where : 
 */
export const UserRolesQuery = `
query UserRoles($id: UUID!, $skip: Int, $limit: Int, $where: RoleInputWhereFilter) {
    result: userById(id: $id) {
        id
        roles(skip: $skip, limit: $limit, where: $where) {
            id
            created
            lastchange
            valid
            startdate
            enddate
        }   
    }
}
`
export const UserRolesQueryAction = CreateAsyncActionFromQuery(UserRolesQuery, {}, UpdateVectorAfterFetch("roles"))

export const UserRolesLoadMoreButton = ({ user, limit=10, where, action=UserRolesQueryAction, children }) => {
    const [_state, _setState] = useState(
        { skip: 0, limit: limit, more: true, loading: false, errors: null }
    )
    const dispatch = useDispatch()
    const onLoadMore = async () => {
        const jsondata = await dispatch(action({...user, limit: _state.limit, skip: _state.skip, where: where}))
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

