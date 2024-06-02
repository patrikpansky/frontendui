import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import { CardCapsule, SearchInput, ProxyLink } from '@hrbolek/uoisfrontend-shared/src'
import { FetchSearchAnyAsyncAction } from "../Queries/FetchSearchAnyAsyncAction"
const BreakElement = () => "; "

const CommonLink = ({children, linkto}) => ({item}) => (<><ProxyLink to={linkto + item?.id}>{children}{item?.fullname || item?.name}</ProxyLink><BreakElement /> </>)
const ComponentMap = {
    EventGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success" ><i className="bi bi-calendar-event" /> E</span>, linkto: "/events/event/view/"}),
    UserGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success"><i className="bi bi-person-fill" /> U</span>, linkto: "/ug/user/view/"}),
    FacilityGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success" ><i className="bi bi-house-fill" /> F</span>, linkto: "/facilities/facility/view/"}),
    GroupGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success" ><i className="bi bi-people-fill" /> G</span>, linkto: "/ug/group/view/"}),
    ProjectGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success" >P</span>, linkto: "/projects/project/view/"}),
    AcSubjectGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success" >P</span>, linkto: "/granting/subject/view/"}),
    PublicationGQLModel: CommonLink({children: <span className="btn btn-sm btn-outline-success" >J</span>, linkto: "/publications/publication/view/"})
    // AcSubjectGQLModel: CommonLink({children: 'P'})
}

let prev = " "
const ShowResultComponent = ({item}) => {
    const { __typename } = item
    const Component = ComponentMap[__typename]
    if (Component) {       
            // const result = (<>
            //     <Component item={item} />{(prev === __typename)?"!":"?"}</>)
            // prev = __typename
            return (
                // result
                <Component item={item} />
            )       
    } else {
        return (
            <><span>{item?.__typename} {item?.fullname || item?.name}</span>; </>
        )
    }
    
}

export const GlobalSearchPage = ({term: propTerm}) => {
    const [params, setParams] = useSearchParams()
    const [term, SetTerm] = useState((propTerm || params.get("term") || ""))

    const onSelect = (id) => {
        console.log("selected", id)
    }

    return (
        <CardCapsule title="Globální vyhledávání uživatelů, skupin, událostí, místností, programů, předmětů, projektů, výsledků">
            <SearchInput label="Vyhledávání" phrase={term} skip={0} limit={10} onSelect={onSelect} FetchByPatternAsyncAction={FetchSearchAnyAsyncAction} ShowResultComponent={ShowResultComponent}/>
        </CardCapsule>
    )

}