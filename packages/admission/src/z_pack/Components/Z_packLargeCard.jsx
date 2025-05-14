import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { Z_packCardCapsule } from "./Z_packCardCapsule"
import { Z_packMediumCard } from "./Z_packMediumCard"

/**
 * A large card component for displaying detailed content and layout for an z_pack entity.
 *
 * This component wraps an `Z_packCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `Z_packMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the Z_packLargeCard component.
 * @param {Object} props.z_pack - The object representing the z_pack entity.
 * @param {string|number} props.z_pack.id - The unique identifier for the z_pack entity.
 * @param {string} props.z_pack.name - The name or label of the z_pack entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const z_packEntity = { id: 123, name: "Sample Entity" };
 * 
 * <Z_packLargeCard z_pack={z_packEntity}>
 *   <p>Additional content for the middle column.</p>
 * </Z_packLargeCard>
 */
export const Z_packLargeCard = ({z_pack, children}) => {
    return (
        <Z_packCardCapsule z_pack={z_pack} >
            <Row>
                <LeftColumn>
                    <Z_packMediumCard z_pack={z_pack}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </Z_packCardCapsule>
    )
}
