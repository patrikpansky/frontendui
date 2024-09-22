import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { infoMediumCard as MediumCard} from './infoMediumCard';
import { infoLoadMoreButton as LoadMoreButton} from './infoLoadMoreButton';
/**
 * 
 */
export const infosCards = ({ pageinfos, children }) => {
    return (
        <>
        <Row>
        { pageinfos.map(
            pageinfo => <Col xl={4} md={6} xs={12} key={ pageinfo.id } ><MediumCard key={ pageinfo.id } pageinfo={ pageinfo } /></Col>
            
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

