import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AcprogramtitletypeMediumCard as MediumCard} from './AcprogramtitletypeMediumCard';
import { AcprogramtitletypeLoadMoreButton as LoadMoreButton} from './AcprogramtitletypeLoadMoreButton';
/**
 * Bc., Ing., ...
 */
export const AcprogramtitletypesCards = ({ acprogramtitletypes, children }) => {
    return (
        <>
        <Row>
        { acprogramtitletypes.map(
            acprogramtitletype => <Col xl={4} md={6} xs={12} key={ acprogramtitletype.id } ><MediumCard key={ acprogramtitletype.id } acprogramtitletype={ acprogramtitletype } /></Col>
            
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

