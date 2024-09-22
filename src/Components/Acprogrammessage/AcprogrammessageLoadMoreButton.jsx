import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const AcprogrammessageLoadMoreButtonFragment = `
fragment AcprogrammessageLoadMoreButtonFragment on AcprogrammessageGQLModel {
        id
    }`

export const AcprogrammessageLoadMoreButton = ({ acprogrammessages, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (acprogrammessages.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

