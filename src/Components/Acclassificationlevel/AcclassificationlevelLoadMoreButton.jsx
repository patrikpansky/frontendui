import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const AcclassificationlevelLoadMoreButtonFragment = `
fragment AcclassificationlevelLoadMoreButtonFragment on AcclassificationlevelGQLModel {
        id
    }`

export const AcclassificationlevelLoadMoreButton = ({ acclassificationlevels, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (acclassificationlevels.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

