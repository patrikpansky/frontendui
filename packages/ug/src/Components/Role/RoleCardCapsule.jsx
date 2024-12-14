import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { RoleLink } from "./RoleLink"

/**
 * A specialized card component that displays an `RoleLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `RoleLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `Role` object.
 *
 * @component
 * @param {Object} props - The props for the RoleCardCapsule component.
 * @param {Object} props.Role - The object representing the Role entity.
 * @param {string|number} props.Role.id - The unique identifier for the Role entity.
 * @param {string} props.Role.name - The display name for the Role entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { RoleCardCapsule } from './RoleCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const RoleEntity = { id: 123, name: "Example Entity" };
 *
 * <RoleCardCapsule Role={RoleEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </RoleCardCapsule>
 */
export const RoleCardCapsule = ({Role, children}) => {
    return (
        <CardCapsule title={<><PersonFill /> <RoleLink Role={Role} /></>}>
            {children}
        </CardCapsule>
    )
}
