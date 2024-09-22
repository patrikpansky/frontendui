import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const UserLoadMoreButtonFragment = `
fragment UserLoadMoreButtonFragment on UserGQLModel {
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
        presences { 
            id
            lastchange
            created
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
        requests { 
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        studies { 
            id
            created
            lastchange
            semester
        }
        classifications { 
            id
            created
            lastchange
            date
            order
        }
        plannedLessons { 
            id
            name
            lastchange
            created
            order
            length
        }
        authorPublications { 
            id
            name
            lastchange
            order
            share
            valid
        }
        answers { 
            id
            lastchange
            created
            value
            aswered
            expired
        }
        rolesOn { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        memberships { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        membership { 
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
        memberOf { 
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
    }`

export const UserLoadMoreButton = ({ users, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (users.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

