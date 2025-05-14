import { PersonFill } from "react-bootstrap-icons"
import { Z_packLink } from "./Z_packLink"
import { Z_packCardCapsule } from "./Z_packCardCapsule"
import { Z_packMediumContent } from "./Z_packMediumContent"

/**
 * A card component that displays detailed content for an z_pack entity.
 *
 * This component combines `Z_packCardCapsule` and `Z_packMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the z_pack entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the Z_packMediumCard component.
 * @param {Object} props.z_pack - The object representing the z_pack entity.
 * @param {string|number} props.z_pack.id - The unique identifier for the z_pack entity.
 * @param {string} props.z_pack.name - The name or label of the z_pack entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const z_packEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Z_packMediumCard z_pack={z_packEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </Z_packMediumCard>
 */
export const Z_packMediumCard = ({z_pack, children}) => {
    return (
        <Z_packCardCapsule title={<><PersonFill /> <Z_packLink z_pack={z_pack} /></>}>
            <Z_packMediumContent z_pack={z_pack}>
                {children}
            </Z_packMediumContent>
        </Z_packCardCapsule>
    )
}
