import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { SubjectLink } from './SubjectLink'
import { SemesterLink } from './SemesterLink'

const SemesterRow = ({index, semester}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><SemesterLink semester={semester} /></td>
            <td></td>
        </tr>
    )
}

export const SubjectSemestersCard = ({subject}) => {
    const semesters = subject?.semesters || []
    return (
        <CardCapsule  title={<>Předmět <SubjectLink subject={subject} /></>}>
            <table className='table table-bordered table-striped table-sm'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>N</td>
                        <td>#</td>
                    </tr>
                </thead>
                <tbody>
                    {semesters.map(
                        (semester, index) => <SemesterRow key={semester?.id} index={index+1} semester={semester} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
