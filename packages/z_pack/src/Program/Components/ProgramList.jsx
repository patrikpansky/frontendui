import {ProgramLink} from './ProgramLink';
import {ProgramMediumCard} from './ProgramMediumCard';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; // Added import
import Col from 'react-bootstrap/Col'; // Added import

export const ProgramList = ({programs}) => {
    return (
        <Container>
            <h2>Programs - Ahojkyyyy</h2>
             {/* Added Row with responsive columns and gutter spacing */}
                {programs.map((program) => (
                    <Col key={program.id}> {/* Each card in a Col */}
                        <ProgramMediumCard program={program} />
                    </Col>
                ))}
           
        </Container>
        );
    }