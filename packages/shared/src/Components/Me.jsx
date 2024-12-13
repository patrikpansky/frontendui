import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

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
            <div className="navbar-nav text-end m-0 p-0">
                <a className="nav-link" href={logoutURL}>
                    {me.fullname}
                </a>
                {showmeURL && (
                    <a className="nav-link" href={`${showmeURL}${me.id}`}>
                        <i className="bi bi-person-circle" /> Já
                    </a>
                )}
            </div>
        );
    }

    return (
        <div className="navbar-nav text-end m-0 p-0">
            <a className="nav-link" href={loginURL}>
                Login
            </a>
        </div>
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
    const items = useSelector(state => state?.items) || {};

    // console.log("PageSentinel items", items)
    const me = Object.values(items).find(user => user?.__typename === "UserGQLModel" && user?.isThisMe);

    // console.log("PageSentinel me", me)

    if (!me) return <div>Nejste přihlášeni</div>;

    const hasPermission = meCondition(me);
    // console.log("PageSentinel hasPermission", hasPermission)
    if (!hasPermission) return <div>Nemáte oprávnění</div>;

    return <>{children}</>;
};