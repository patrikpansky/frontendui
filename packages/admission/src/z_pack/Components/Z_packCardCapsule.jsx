import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { Z_packLink } from "./Z_packLink"

/**
 * A specialized card component that displays an `Z_packLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `Z_packLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `z_pack` object.
 *
 * @component
 * @param {Object} props - The props for the Z_packCardCapsule component.
 * @param {Object} props.z_pack - The object representing the z_pack entity.
 * @param {string|number} props.z_pack.id - The unique identifier for the z_pack entity.
 * @param {string} props.z_pack.name - The display name for the z_pack entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { Z_packCardCapsule } from './Z_packCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const z_packEntity = { id: 123, name: "Example Entity" };
 *
 * <Z_packCardCapsule z_pack={z_packEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </Z_packCardCapsule>
 */
export const Z_packCardCapsule = ({z_pack, children, title=<><PersonFill /> <Z_packLink z_pack={z_pack} /></>}) => {
    return (
        <CardCapsule title={title}>
            {children}
        </CardCapsule>
    )
}
