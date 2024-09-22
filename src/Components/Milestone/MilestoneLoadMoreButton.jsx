import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const MilestoneLoadMoreButtonFragment = `
fragment MilestoneLoadMoreButtonFragment on MilestoneGQLModel {
        id
        previous { 
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
        nexts { 
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
    }`

export const MilestoneLoadMoreButton = ({ milestones, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (milestones.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

