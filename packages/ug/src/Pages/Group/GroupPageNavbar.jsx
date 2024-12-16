import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LogButton, ProxyLink, MyNavbar } from '@hrbolek/uoisfrontend-shared';
import { GroupLink } from '../../Components';
import { House, HouseFill, PersonFill } from 'react-bootstrap-icons';

const TitleNavButton = ({ group, segment, label }) => {
    const urlbase = (segment) => `/ug/group/${segment}/${group?.id}`;
    return (
        <Nav.Link as={"span"}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};


export const GroupPageNavbar = ({ group }) => {
    const urlbase = (segment) => `/ug/group/${segment}/${group?.id}`;
    return (
        <MyNavbar>
            <ul className="navbar-nav d-flex justify-content-center w-100">
                <TitleNavButton group={group} segment="granting" label="Garance" />
                <TitleNavButton group={group} segment="learning" label="Výuka" />
                <TitleNavButton group={group} segment="events" label="Rozvrh" />
                <TitleNavButton group={group} segment="roles" label="Role" />
                <TitleNavButton group={group} segment="groups" label="Skupiny" />
                <TitleNavButton group={group} segment="projects" label="Projekty" />
                <TitleNavButton group={group} segment="publications" label="Výsledky" />
                <TitleNavButton group={group} segment="requests" label="Požadavky" />
            </ul>
            <ul className="navbar-nav d-flex justify-content-center w-100">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Výuka
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <TitleNavButton group={group} segment="events" label="Rozvrh" />
                        <TitleNavButton group={group} segment="granting" label="Garance" />
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Jine</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tvůrčí činnost
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <TitleNavButton group={group} segment="projects" label="Projekty" />
                        <TitleNavButton group={group} segment="publications" label="Výsledky" />
                        <TitleNavButton group={group} segment="requests" label="Požadavky" />
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Administrativa
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <TitleNavButton group={group} segment="requests" label="Požadavky" />
                    </div>
                </li>
            </ul>
        </MyNavbar>
    );
};