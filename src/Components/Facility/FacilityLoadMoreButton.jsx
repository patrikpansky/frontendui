import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const FacilityLoadMoreButtonFragment = `
fragment FacilityLoadMoreButtonFragment on FacilityGQLModel {
        id
        externalIds { 
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
        subFacilities { 
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
        plannedLessons { 
            id
            name
            lastchange
            created
            order
            length
        }
    }`

export const FacilityLoadMoreButton = ({ facilitys, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (facilitys.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

