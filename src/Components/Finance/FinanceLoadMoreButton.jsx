import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const FinanceLoadMoreButtonFragment = `
fragment FinanceLoadMoreButtonFragment on FinanceGQLModel {
        id
        financeType { 
            id
            name
            nameEn
            lastchange
            created
            valid
        }
    }`

export const FinanceLoadMoreButton = ({ finances, children }) => {
    const [skip, setSkip] = useState(0)
    const [more, setMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const onLoadMore = () => {

    }
    if (finances.length === 0) {
        return (
            <button className="btn btn-outline-success w-100 " onClick={(e)=>{e.innerHTML = 'Více už toho opravdu není.'} }>{children || "Více toho není"}</button>
        )
    } else {
        return (
            <button className="btn btn-outline-success w-100 " onClick={onLoadMore}>{children || "Načíst více (neimplementováno)"}</button>
        )        
    }

}

