import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const FormsectionLoadMoreButtonFragment = `
fragment FormsectionLoadMoreButtonFragment on FormsectionGQLModel {
        id
        parts { 
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }`

export const FormsectionLoadMoreButton = ({ formsections, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (formsections.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

