import React from "react";
import { Link, useResolvedPath } from "react-router-dom";

/**
 * shared module.
 * @module shared/components
 */

/**
 * A `ProxyLink` component that conditionally determines whether to reload the document based on the link's target.
 *
 * @param {Object} props - The properties for the ProxyLink component.
 * @param {string} props.to - The target path for the link.
 * @param {React.ReactNode} props.children - The content to render inside the link.
 * @param {Object} props.others - Additional props to pass to the `Link` component.
 *
 * @returns {JSX.Element} A React Router `Link` component with conditional behavior.
 *
 * @example
 * <ProxyLink to="/local-path">Local Link</ProxyLink>
 * <ProxyLink to="https://external-site.com">External Link</ProxyLink>
 */
export const ProxyLink = ({ to, children, ...others }) => {
    const { pathname } = useResolvedPath(to); // Resolves the target path
    const base = pathname.split("/")[1]; // Extracts the base path from the resolved path

    // Determines if the target path is local to the current application
    const isLocal = window.location.pathname.startsWith(`/${base}`);

    return (
        <Link to={to} {...others} reloadDocument={!isLocal}>
            {children}
        </Link>
    );
};
