import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { SubjectLink } from './SubjectLink'
import { SemesterLink } from './SemesterLink'

const TopicRow = ({index, topic}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{topic?.name}</td>
            <td></td>
        </tr>
    )
}

export const SemesterTopicsCard = ({semester}) => {
    const topics = semester?.topics || []
    return (
        <CardCapsule  title={<>Semestr <SemesterLink semester={semester} /></>}>
            <table className='table table-bordered table-striped table-sm'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>N</td>
                        <td>#</td>
                    </tr>
                </thead>
                <tbody>
                    {topics.map(
                        (topic, index) => <TopicRow key={topic?.id} index={index+1} topic={topic} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
