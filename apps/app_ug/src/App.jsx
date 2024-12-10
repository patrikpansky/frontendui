import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { AppCanvas, LogButton } from '@hrbolek/uoisfrontend-gql-shared'
import { AppRouter } from './AppRouter';

export const App = () => {
    return (
        // <Container fluid>
        <AppCanvas>
            <Navbar className='bg-light'>
                <Container>
                    <Navbar.Brand href="" className="justify-content-start"><a href='/' className='btn'>UOIS</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <LogButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <AppRouter />
        </AppCanvas>    
        // {/* </Container> */}
    )
}

