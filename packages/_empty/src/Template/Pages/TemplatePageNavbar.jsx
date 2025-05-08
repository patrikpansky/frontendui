import Nav from 'react-bootstrap/Nav'
import { ProxyLink, MyNavbar, useHash } from '@hrbolek/uoisfrontend-shared';

import { TemplateURI } from '../Components'

/**
 * Allow to use HashContainer for determination which component at page will be rendered.
 * That must be manually inserted at TemplatePageContent, usually this should be done 
 * as children of TemplateLargeCard.
 * <TemplateLargeCard>
 *     <HashContainer>
 *         <VectorA id="history"/>
 *         <VectorB id="roles"/>
 *         <VectorC id="graph"/>
 *     </HashContainer>
 * </TemplateLargeCard>
 * it is usefull to define globally active "areas" like science, administration, teaching, ...
 */
const TemplatePageSegments = [
    { segment: 'history', label: 'Historie'},
    { segment: 'roles', label: 'Role' },
    { segment: 'graph', label: 'Stavy' },
]

/**
 * A navigation button component that generates a URL based on the template's ID and a specific segment.
 * The button uses a `ProxyLink` to navigate while preserving hash and query parameters.
 *
 * ### Features:
 * - Dynamically constructs the URL with a hash fragment pointing to the specified segment.
 * - Displays a label for the navigation link.
 * - Integrates seamlessly with `ProxyLink` for enhanced navigation.
 *
 * @component
 * @param {Object} props - The properties for the TitleNavButton component.
 * @param {Object} props.template - The template object containing details about the template.
 * @param {string|number} props.template.id - The unique identifier for the template.
 * @param {string} props.segment - The segment to append as a hash fragment in the URL.
 * @param {string} props.label - The text to display as the label for the navigation button.
 *
 * @returns {JSX.Element} A styled navigation button linking to the constructed URL.
 *
 * @example
 * // Example 1: Basic usage with a template and segment
 * const template = { id: 123 };
 * const segment = "details";
 * const label = "View Details";
 *
 * <TitleNavButton template={template} segment={segment} label={label} />
 * // Resulting URL: `/ug/template/view/123#details`
 *
 * @example
 * // Example 2: Different segment and label
 * <TitleNavButton template={{ id: 456 }} segment="settings" label="Template Settings" />
 * // Resulting URL: `/ug/template/view/456#settings`
 */
const TitleNavButton = ({ template, segment, label, ...props }) => {
    // const urlbase = (segment) => `/templates/template/${segment}/${template?.id}`;
    const urlbase = (segment) => `${TemplateURI}${template?.id}#${segment}`;
    return (
        <Nav.Link as={"span"} {...props}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};

/**
 * Renders the navigation bar for an Template page.
 *
 * This component uses a custom hook, `useHash()`, to determine the current hash
 * and highlights the active segment. It displays a navigation bar (using MyNavbar)
 * with several segments (e.g. "history", "roles", "graph"), each rendered as a 
 * TitleNavButton. The segments are hardcoded in this component and only rendered 
 * if an `template` object is provided.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.template - The template entity object that provides context for the page.
 * @param {string|number} props.template.id - The unique identifier for the template.
 * @param {Function} props.onSearchChange - Callback function to handle changes in the search input.
 *
 * @returns {JSX.Element} The rendered TemplatePageNavbar component.
 *
 * @example
 * // Example usage:
 * const template = { id: 123, ... };
 * <TemplatePageNavbar template={template} onSearchChange={handleSearchChange} />
 */
export const TemplatePageNavbar = ({ template, onSearchChange }) => {
    const [currentHash, setHash] = useHash(); // Use the custom hook to manage hash

    
    return (
        <div className='screen-only'>
        <MyNavbar onSearchChange={onSearchChange} >
            {template && TemplatePageSegments.map(({ segment, label }) => (
                <Nav.Item key={segment} >
                    <TitleNavButton
                        template={template}
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