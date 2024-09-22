import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const PublicationauthorLoadMoreButtonFragment = `
fragment PublicationauthorLoadMoreButtonFragment on PublicationauthorGQLModel {
        id
    }`

export const PublicationauthorLoadMoreButton = ({ publicationauthors, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (publicationauthors.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

