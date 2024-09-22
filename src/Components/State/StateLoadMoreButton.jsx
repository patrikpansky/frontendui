import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const StateLoadMoreButtonFragment = `
fragment StateLoadMoreButtonFragment on StateGQLModel {
        id
        requests { 
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        sources { 
            id
            created
            lastchange
            name
            nameEn
        }
        targets { 
            id
            created
            lastchange
            name
            nameEn
        }
        roletypes { 
            id
            created
            lastchange
            name
            nameEn
        }
    }`

export const StateLoadMoreButton = ({ states, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (states.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

