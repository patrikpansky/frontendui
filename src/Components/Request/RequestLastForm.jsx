import { CardCapsule, useFreshItem } from '@hrbolek/uoisfrontend-shared/src'

import { FormFullCard } from '../Form/FormFullCard'
import { FormsAsyncActions } from '../../Queries/_forms'

const HistoryRow = ({index, history}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{history?.lastchange}</td>
        </tr>
    )
}

export const RequestLastForm = ({request, children}) => {
    const histories = request?.histories || []
    const mapped = histories.map(
        h => {
            const saved = new Date(h?.lastchange)
            return ({...h, saved, _c: saved.getTime()})
        }
    )
    const ordered = mapped.toSorted((a, b) => (a?._c || 0) - (b?._c || 0))
    const lastItem = ordered[ordered.length - 1]
    const [form, promise] = useFreshItem(lastItem?.form, FormsAsyncActions.read)
    if (form) {
        return (
            <FormFullCard form={form} />
        )
    } else {
        return (
            <>Chyba<br />{JSON.stringify(ordered)}</>
        )
    }
    
}
