import Nav from 'react-bootstrap/Nav'
import { ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';

import { Z_packURI } from '../Components'
/**
 * A navigation button component that generates a URL based on the z_pack's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.z_pack - The z_pack object containing details about the z_pack.
 * @param {string|number} props.z_pack.id - The unique identifier for the z_pack.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a z_pack and segment
 * const z_pack = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton z_pack={z_pack} segment={segment} label={label} />
 * // Resulting URL: `/ug/z_pack/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton z_pack={{ id: 456 }} segment="settings" label="Z_pack Settings" />
 * // Resulting URL: `/ug/z_pack/view/456#settings`
 */
const TitleNavButton = ({ z_pack, segment, label, ...props }) => {
    // const urlbase = (segment) => `/z_packs/z_pack/${segment}/${z_pack?.id}`;
    const urlbase = (segment) => `${Z_packURI}${z_pack?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};

/**
 * Renders the navigation bar for an Z_pack page.
 *
 * This component uses a custom hook, `useHash()`, to determine the current hash
 * and highlights the active segment. It displays a navigation bar (using MyNavbar)
 * with several segments (e.g. "history", "roles", "graph"), each rendered as a 
 * TitleNavButton. The segments are hardcoded in this component and only rendered 
 * if an `z_pack` object is provided.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.z_pack - The z_pack entity object that provides context for the page.
 * @param {string|number} props.z_pack.id - The unique identifier for the z_pack.
 * @param {Function} props.onSearchChange - Callback function to handle changes in the search input.
 *
 * @returns {JSX.Element} The rendered Z_packPageNavbar component.
 *
 * @example
 * // Example usage:
 * const z_pack = { id: 123, ... };
 * <Z_packPageNavbar z_pack={z_pack} onSearchChange={handleSearchChange} />
 */
export const Z_packPageNavbar = ({ z_pack, onSearchChange }) => {
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
            {z_pack && segments.map(({ segment, label }) => (
                <Nav.Item key={segment} >
                    <TitleNavButton
                        z_pack={z_pack}
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