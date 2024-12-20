import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { requestLink } from "./requestLink"

/**
 * A specialized card component that displays an `requestLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `requestLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `request` object.
 *
 * @component
 * @param {Object} props - The props for the requestCardCapsule component.
 * @param {Object} props.request - The object representing the request entity.
 * @param {string|number} props.request.id - The unique identifier for the request entity.
 * @param {string} props.request.name - The display name for the request entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { requestCardCapsule } from './requestCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const requestEntity = { id: 123, name: "Example Entity" };
 *
 * <requestCardCapsule request={requestEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </requestCardCapsule>
 */
export const requestCardCapsule = ({request, children, title=<><PersonFill /> <requestLink request={request} /></>}) => {
    return (
        <CardCapsule title={title}>
            {children}
        </CardCapsule>
    )
}
