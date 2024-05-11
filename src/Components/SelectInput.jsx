import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const SelectInput = ({FetchAsyncAction, skip=0, limit=100, where=null, onChange, ...selectProps}) => {
    const [resuls, setResults] = useState([])
    const dispatch = useDispatch()
    const onChange_ = (event) => {
        event.preventDefault()
        const value = event.target.value
        if (onChange) {
            onChange(value)
        } else {
            console.error("missing onChange (SelectInput)")
        }
    }

    useEffect(
        ()=> {
            const func = async () => {
                const json = await dispatch(FetchAsyncAction({skip, limit, where}))
                const result = json?.data?.result
                if (result) {
                    setResults(result)
                }
                // console.log("json", json)
            }
            func()
        }, [FetchAsyncAction, dispatch, skip, limit, where]
    )
    return (
        <select className="form-select" onChange={onChange_} {...selectProps}>
            {resuls.map(
                item => <option key={item.id} value={item.id}>{item?.fullname || item?.name || "???Chyba???"}</option>
            )}
        </select>
    )

}