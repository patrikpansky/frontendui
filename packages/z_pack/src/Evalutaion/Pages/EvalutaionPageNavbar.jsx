import Nav from 'react-bootstrap/Nav'
import { ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';

import { EvalutaionURI } from '../Components'
/**
 * A navigation button component that generates a URL based on the evalutaion's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.evalutaion - The evalutaion object containing details about the evalutaion.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a evalutaion and segment
 * const evalutaion = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton evalutaion={evalutaion} segment={segment} label={label} />
 * // Resulting URL: `/ug/evalutaion/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton evalutaion={{ id: 456 }} segment="settings" label="Evalutaion Settings" />
 * // Resulting URL: `/ug/evalutaion/view/456#settings`
 */
const TitleNavButton = ({ evalutaion, segment, label, ...props }) => {
    // const urlbase = (segment) => `/evalutaions/evalutaion/${segment}/${evalutaion?.id}`;
    const urlbase = (segment) => `${EvalutaionURI}${evalutaion?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};

/**
 * Renders the navigation bar for an Evalutaion page.
 *
 * This component uses a custom hook, `useHash()`, to determine the current hash
 * and highlights the active segment. It displays a navigation bar (using MyNavbar)
 * with several segments (e.g. "history", "roles", "graph"), each rendered as a 
 * TitleNavButton. The segments are hardcoded in this component and only rendered 
 * if an `evalutaion` object is provided.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.evalutaion - The evalutaion entity object that provides context for the page.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion.
 * @param {Function} props.onSearchChange - Callback function to handle changes in the search input.
 *
 * @returns {JSX.Element} The rendered EvalutaionPageNavbar component.
 *
 * @example
 * // Example usage:
 * const evalutaion = { id: 123, ... };
 * <EvalutaionPageNavbar evalutaion={evalutaion} onSearchChange={handleSearchChange} />
 */
export const EvalutaionPageNavbar = ({ evalutaion, onSearchChange }) => {
    const [currentHash, setHash] = useHash(); // Use the custom hook to manage hash

    const segments = [
        { segment: 'history', label: 'Historie'},
        // { segment: 'permissions', label: 'Práva' },
        { segment: 'roles', label: 'Role' },
        // { segment: 'library', label: 'Knihovna' },
        { segment: 'graph', label: 'Stavy' },
    ]
    return (
        <div className='screen-only'>
        <MyNavbar onSearchChange={onSearchChange} >
            {evalutaion && segments.map(({ segment, label }) => (
                <Nav.Item key={segment} >
                    <TitleNavButton
                        evalutaion={evalutaion}
                        segment={segment}
                        label={label}
                        className={segment===currentHash?"active":""} aria-current={segment===currentHash?"page":undefined}
                    />
                </Nav.Item>
            ))}
      </MyNavbar>
      </div>
    );
};