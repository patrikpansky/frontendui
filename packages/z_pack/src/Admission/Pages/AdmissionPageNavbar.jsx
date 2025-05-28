import Nav from 'react-bootstrap/Nav'
import { ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';

import { AdmissionURI } from '../Components'
/**
 * A navigation button component that generates a URL based on the admission's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.admission - The admission object containing details about the admission.
 * @param {string|number} props.admission.id - The unique identifier for the admission.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a admission and segment
 * const admission = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton admission={admission} segment={segment} label={label} />
 * // Resulting URL: `/ug/admission/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton admission={{ id: 456 }} segment="settings" label="Admission Settings" />
 * // Resulting URL: `/ug/admission/view/456#settings`
 */
const TitleNavButton = ({ admission, segment, label, ...props }) => {
    // const urlbase = (segment) => `/admissions/admission/${segment}/${admission?.id}`;
    const urlbase = (segment) => `${AdmissionURI}${admission?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};

/**
 * Renders the navigation bar for an Admission page.
 *
 * This component uses a custom hook, `useHash()`, to determine the current hash
 * and highlights the active segment. It displays a navigation bar (using MyNavbar)
 * with several segments (e.g. "history", "roles", "graph"), each rendered as a 
 * TitleNavButton. The segments are hardcoded in this component and only rendered 
 * if an `admission` object is provided.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.admission - The admission entity object that provides context for the page.
 * @param {string|number} props.admission.id - The unique identifier for the admission.
 * @param {Function} props.onSearchChange - Callback function to handle changes in the search input.
 *
 * @returns {JSX.Element} The rendered AdmissionPageNavbar component.
 *
 * @example
 * // Example usage:
 * const admission = { id: 123, ... };
 * <AdmissionPageNavbar admission={admission} onSearchChange={handleSearchChange} />
 */
export const AdmissionPageNavbar = ({ admission, onSearchChange }) => {
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
            {admission && segments.map(({ segment, label }) => (
                <Nav.Item key={segment} >
                    <TitleNavButton
                        admission={admission}
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