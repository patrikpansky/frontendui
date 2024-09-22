import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcsemesterMediumCard as MediumCard} from './AcsemesterMediumCard';
import { AcsemesterLoadMoreButton as LoadMoreButton} from './AcsemesterLoadMoreButton';
/**
 * Entity representing each semester in study subject
 */
export const AcsemestersCards = ({ acsemesters, children }) => {
    return (
        <>
        <Row>
        { acsemesters.map(
            acsemester => <Col xl={4} md={6} xs={12} key={ acsemester.id } ><MediumCard key={ acsemester.id } acsemester={ acsemester } /></Col>
            
        )}
        </Row>
        <Row>
            <Col xl={12} md={12} xs={12} >
                {children}
            </Col>
        </Row>
        </>
    )
}

