import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { FormLink } from '../Form/FormLink'

const HistoryRow = ({index, history}) => {
    const date = new Date(history?.lastchange)
    return (
        <tr>
            <td><FormLink form={history?.form}>{index}</FormLink></td>
            <td>{date.toLocaleDateString()}, {date.toLocaleTimeString()}</td>
            <td>{history?.changedby?.fullname}</td>
            <td>{history?.name}</td>
        </tr>
    )
}

export const RequestHistoryCard = ({request, children}) => {
    const histories = request?.histories || []
    const mapped = histories.map(
        h => ({...h})
    )
    // const ordered = sections.toSorted((a, b) => (a?.order || 0) - (b?.order || 0))
    return (
        <CardCapsule  title={<>Požadavek {request?.name }</>}>
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Datum</th>
                        <th>Kdo</th>
                        <th>Poznámka</th>
                    </tr>
                </thead>
                <tbody>
                    {mapped.map(
                        (history, index) => <HistoryRow key={history?.id} index={index + 1} history={history} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
