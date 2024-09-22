import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const PlannedlessonLoadMoreButtonFragment = `
fragment PlannedlessonLoadMoreButtonFragment on PlannedlessonGQLModel {
        id
        linkedWith { 
            id
            name
            lastchange
            created
            order
            length
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
        facilities { 
            id
            name
            nameEn
            lastchange
            created
            label
            address
            valid
            capacity
            geometry
            geolocation
        }
    }`

export const PlannedlessonLoadMoreButton = ({ plannedlessons, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (plannedlessons.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

