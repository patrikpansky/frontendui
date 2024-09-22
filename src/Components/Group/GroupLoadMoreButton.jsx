import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const GroupLoadMoreButtonFragment = `
fragment GroupLoadMoreButtonFragment on GroupGQLModel {
        id
        events { 
            id
            name
            nameEn
            lastchange
            created
            duration
            description
            place
            placeId
            startdate
            enddate
        }
        externalIds { 
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
        plannedLessons { 
            id
            name
            lastchange
            created
            order
            length
        }
        subgroups { 
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
        memberships { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        roles { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
    }`

export const GroupLoadMoreButton = ({ groups, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (groups.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

