import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CreateAsyncActionFromQuery } from "../Queries";

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
const MeAsyncAction = CreateAsyncActionFromQuery(MeQuery);

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
