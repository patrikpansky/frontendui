import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";
import { ArrowRightCircle, ArrowRightCircleFill, BoxArrowInLeft, BoxArrowRight, DoorOpen, HouseFill, PersonCircle } from "react-bootstrap-icons";
import Nav from "react-bootstrap"
import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "./ProxyLink";

/**
 * shared module.
 * @module shared/components
 */


// GraphQL query for fetching the logged-in user
const MeQuery = `
{
    result: me {
        __typename
        isThisMe
        id
        name
        surname
        fullname
        email
        roles {
            id
            group {
                id
                name
            }
            roletype {
                id
                name
            }
        }
    }
}`;

// Create an async action from the GraphQL query
const MeAsyncAction = createAsyncGraphQLAction(MeQuery);

/**
 * A `LogButton` component that displays login/logout links and the user's profile link.
 *
 * @param {Object} props - The properties for the LogButton component.
 * @param {string} [props.loginURL='/oauth/login2?redirect_uri=/'] - The URL to redirect for login.
 * @param {string} [props.logoutURL='/oauth/logout'] - The URL to redirect for logout.
 * @param {string} [props.showmeURL='/ug/user/view/'] - The base URL for the user's profile view. If null, the profile link is not shown.
 *
 * @returns {JSX.Element} The login/logout button and optional profile link.
 */
export const LogButton = ({
    loginURL = '/oauth/login2?redirect_uri=/',
    logoutURL = '/oauth/logout',
    showmeURL = '/ug/user/view/',
}) => {
    const dispatch = useDispatch();
    const [me, setMe] = useState(null);

    // Fetch the logged-in user's data on component mount
    useEffect(() => {
        const fetchMe = async () => {
            try {
                const jsondata = await dispatch(MeAsyncAction({}));
                const meFresh = jsondata?.data?.result;
                if (meFresh) {
                    setMe(meFresh);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchMe();
    }, [dispatch]);

    if (me) {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <PersonCircle size={32} />
                </Dropdown.Toggle>
    
                <Dropdown.Menu align="end">
                    <Dropdown.Item href="/index"><HouseFill size={32} /> Index</Dropdown.Item>
                    <Dropdown.Item href={`/ug/user/view/${me?.id}`}><PersonCircle size={32} /> Profil</Dropdown.Item>
                    <Dropdown.Item href="/logout"><BoxArrowRight size={32}/> Odhlásit</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );        
        // return (
        //     <div className="navbar-nav text-end m-0 p-0">
        //         <a className="nav-link" href={logoutURL}>
        //             {/* <DoorOpen size={32} /> */}
                    
        //             {me.fullname}
        //             <BoxArrowRight size={32} />
        //             <ArrowRightCircleFill size={32} />
        //         </a>
        //         {showmeURL && (
        //             <a className="nav-link" href={`${showmeURL}${me.id}`}>
        //                 {/* <i className="bi bi-person-circle" /> Já */}
        //                 <PersonCircle size={32}/>
        //             </a>
        //         )}
        //     </div>
        // );
    }

    return (
        // <div className="navbar-nav text-end m-0 p-0">
        //     <a className="nav-link" href={loginURL}>
        //         Login
        //     </a>
        // </div>
        <a className="nav-link" href={loginURL}>
            <BoxArrowInLeft size={32} /> Přihlásit
        </a>

    );
};


/**
 * A component that conditionally renders its children based on user permissions.
 * It should disable visualisation if logged user (me) would get uncompleted data.
 *
 * @component
 * @param {Object} props - The props for the PageSentinel component.
 * @param {Function} [props.meCondition=(me => me?.email?.includes("world"))] - 
 *    A function that determines whether the current user (`me`) has permission. 
 *    Receives the user object as an argument and returns a boolean.
 * @param {React.ReactNode} props.children - The content to render if the user meets the condition.
 *
 * @returns {JSX.Element|null} - The rendered component if the condition is met, a message if not,
 *    or null if the user data is not available.
 *
 * @example
 * // Usage example
 * const MyComponent = () => (
 *   <PageSentinel meCondition={(me) => me?.role === "admin"}>
 *     <div>Welcome, Admin!</div>
 *   </PageSentinel>
 * );
 */
export const ComponentSentinel = ({ meCondition = (me => me?.email?.includes("world")), children }) => {
    // const items = useSelector(state => state?.items) || {};

    // console.log("PageSentinel items", items)
    // const me = Object.values(items).find(user => user?.__typename === "UserGQLModel" && user?.isThisMe);

    // console.log("PageSentinel me", me)

    // const { me } = useMe()

    // if (!me) return <div>Nejste přihlášeni</div>;

    // const hasPermission = meCondition(me);
    // console.log("PageSentinel hasPermission", hasPermission)
    // if (!hasPermission) return <div>Nemáte oprávnění</div>;

    return <>{children}</>;
};

export const useMe = ({refresh=false, AsyncAction=MeAsyncAction}={}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state?.items) || {};
    const [state, setState] = useState({
        me: Object.values(items).find(user => user?.__typename === "UserGQLModel" && user?.isThisMe),
        error: null,
        loading: true,
        notLogged: null,
    });
    // console.log("useMe", state)

    // console.log("PageSentinel items", items)
    // const me = state.me;

    useEffect(() => {
        
        const fetchMe = async () => {
            try {
                const jsondata = await dispatch(AsyncAction({}));
                const meFresh = jsondata?.data?.result;
                if (meFresh) {
                    setState(state => ({ ...state, me: meFresh, error: null, loading: false}));
                } else {
                    setState(state => ({ ...state, error: "Neočekávaná odpověď od serveru", loading: false}));
                }
            } catch (error) {
                setState(state => ({ ...state, error, loading: false, notLogged: null }));
                console.error("Error fetching user data:", error);
            }
        };
        if (refresh || !state.me) {
            fetchMe();
        } else {
            setState(state => ({ ...state, error: null, loading: false}));
        }
        
    }, [dispatch, AsyncAction]);

    return {...state}
}

export const MyNavbar = ({
    loginURL = '/oauth/login2?redirect_uri=/',
    logoutURL = '/oauth/logout',
    showmeURL = '/ug/user/view/',
    indexURL = '/index',
    onSearchChange = 1,
    children
}) => {
    // const dispatch = useDispatch();
    // const [state, setState] = useState({
    //     me: null,
    //     error: null,
    //     loading: true,
    //     notLogged: null,
    // });

    const handleSearchChange = (e) => {
        const value = e.target.value;
        if (onSearchChange) {
            onSearchChange(value);
        }
    };

    const state = useMe()

    if (state.loading) {
        return (
            <div className="text-center">
                <span>Nahrávám...</span>
            </div>
        );
    }

    if (state.error) {
        return (
            <div className="text-center">
                <h2>Chyba</h2>
                <span>{state.error?.message || "Došlo k chybě. Zkuste to prosím znovu."}</span>
                <a className="btn btn-lg btn-primary" href={loginURL}>Přihlásit</a>
            </div>
        );
    }

    if (state.notLogged) {
        return (
            <div className="text-center">
                <a className="btn btn-lg btn-primary" href={loginURL}>Přihlásit</a>
            </div>
        );
    }
    //navbar-light bg-light
    return (
        <Nav className="navbar navbar-expand-lg w-100"> 
            <ProxyLink to={indexURL} className="d-flex align-items-center me-3" aria-label="Home">
                <HouseFill size={24} />
            </ProxyLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/* <ul className="navbar-nav me-auto"> */}
                {/* <ul className="navbar-nav d-flex justify-content-center w-100">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul> */}
                {children}
                {onSearchChange && 
                    <form className="d-flex my-2 w-50">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} />
                    </form>
                }
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <ProxyLink to={`${showmeURL}${state?.me?.id}`} className="d-flex align-items-center me-3" aria-label="Profile">
                            <PersonCircle size={24} />
                        </ProxyLink>
                    </li>
                </ul>
            </div>
        </Nav>
    );
};

