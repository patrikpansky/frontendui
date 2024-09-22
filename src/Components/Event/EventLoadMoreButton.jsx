import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const EventLoadMoreButtonFragment = `
fragment EventLoadMoreButtonFragment on EventGQLModel {
        id
        groups { 
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
        users { 
            id
            created
            lastchange
            name
            firstname
            surname
            fullname
            email
            valid
            isThisMe
            gdpr
        }
        presences { 
            id
            lastchange
            created
        }
        subEvents { 
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
    }`

export const EventLoadMoreButton = ({ events, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (events.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

