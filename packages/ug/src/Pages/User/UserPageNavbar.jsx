import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LogButton, ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';
import { UserLink } from '../../Components';
import { House, HouseFill, PersonFill } from 'react-bootstrap-icons';

/**
 * A navigation button component that generates a URL based on the user's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.user - The user object containing details about the user.
 * @param {string|number} props.user.id - The unique identifier for the user.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a user and segment
 * const user = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton user={user} segment={segment} label={label} />
 * // Resulting URL: `/ug/user/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton user={{ id: 456 }} segment="settings" label="User Settings" />
 * // Resulting URL: `/ug/user/view/456#settings`
 */
const TitleNavButton = ({ user, segment, label, ...props }) => {
    // const urlbase = (segment) => `/ug/user/${segment}/${user?.id}`;
    const urlbase = (segment) => `/ug/user/view/${user?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};


export const UserPageNavbar = ({ user }) => {
    const [currentHash, setHash] = useHash(); // Use the custom hook to manage hash

    const styles = {
        true: {
            color: '#fff',
            backgroundColor: '#efefef',
            // backgroundColor: 'transparent',
            // borderLeft: '1px solid #cfcfcf', // Left border
            // borderRight: '1px solid #cfcfcf', // Right border
            // borderTop: '1px solid #cfcfcf', // Top border
            // borderRadius: '0.25rem 0.25rem 0 0', // Rounded corners only for the top-left and top-right
            // padding: '0.5rem 1rem',
            // cursor: 'pointer',
            // textDecoration: 'none',
        },
        false: {
            color: '#000',
            backgroundColor: 'transparent',
            // border: '1px solid #cfcfcf', // Full border
            // borderRadius: '0.25rem', // Fully rounded corners
            // padding: '0.5rem 1rem',
            // cursor: 'pointer',
            // textDecoration: 'none',
        },
    };
    const getNavItemStyle = (segment) => styles[currentHash === segment]
    // const getNavItemStyle = (segment) => {
    //     const normalizedHash = (currentHash || '').trim().toLowerCase(); // Normalize currentHash
    //     const normalizedSegment = segment.trim().toLowerCase(); // Normalize segment
    //     return styles[normalizedHash === normalizedSegment];
    // };    
    const segments = [
        { segment: 'granting', label: 'Garance' },
        { segment: 'learning', label: 'Výuka' },
        { segment: 'events', label: 'Rozvrh' },
        { segment: 'roles', label: 'Role' },
        { segment: 'groups', label: 'Skupiny' },
        { segment: 'projects', label: 'Projekty' },
        { segment: 'publications', label: 'Výsledky' },
        { segment: 'requests', label: 'Požadavky' },
    ]
    return (
        <MyNavbar>
            <ul className="navbar-nav nav-tabs d-flex justify-content-center w-100">
                {segments.map(({ segment, label }) => (
                    <li key={segment}>
                        <TitleNavButton
                            user={user}
                            segment={segment}
                            label={label}
                            className={(segment === currentHash)?"nav-item active bg-primary-subtle":"nav-item"} 
                            style={getNavItemStyle(segment)}
                        />
                    </li>
                ))}
            </ul>

            <ul className="navbar-nav d-flex justify-content-center w-100">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Výuka
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <TitleNavButton user={user} segment="events" label="Rozvrh"  style={getNavItemStyle('events')}/>
                        <TitleNavButton user={user} segment="granting" label="Garance"  style={getNavItemStyle('granting')}/>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Jine</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tvůrčí činnost
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <TitleNavButton user={user} segment="projects" label="Projekty"  style={getNavItemStyle('projects')}/>
                        <TitleNavButton user={user} segment="publications" label="Výsledky"  style={getNavItemStyle('publications')}/>
                        <TitleNavButton user={user} segment="requests" label="Požadavky"  style={getNavItemStyle('requests')}/>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Administrativa
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <TitleNavButton user={user} segment="requests" label="Požadavky"  style={getNavItemStyle('requests')}/>
                    </div>
                </li>
            </ul>
        </MyNavbar>
    );
};