import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectLink } from './SubjectLink'
import { ProgramLink } from './ProgramLink'

const SubjectRow = ({index, subject}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><SubjectLink subject={subject} /></td>
            <td></td>
        </tr>
    )
}

export const ProgramSubjectsCard = ({program}) => {
    const subjects = program?.subjects || []
    return (
        <CardCapsule  title={<>Program <ProgramLink program={program} /></>}>
            <table className='table table-bordered table-striped table-sm'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>N</td>
                        <td>#</td>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map(
                        (subject, index) => <SubjectRow key={subject?.id} index={index+1} subject={subject} />
                    )}
                </tbody>
            </table>
        </CardCapsule>
    )
}
