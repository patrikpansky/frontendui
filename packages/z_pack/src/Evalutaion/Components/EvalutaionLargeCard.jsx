import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { EvalutaionCardCapsule } from "./EvalutaionCardCapsule"
import { EvalutaionMediumCard } from "./EvalutaionMediumCard"

/**
 * A large card component for displaying detailed content and layout for an evalutaion entity.
 *
 * This component wraps an `EvalutaionCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `EvalutaionMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the EvalutaionLargeCard component.
 * @param {Object} props.evalutaion - The object representing the evalutaion entity.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion entity.
 * @param {string} props.evalutaion.name - The name or label of the evalutaion entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const evalutaionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <EvalutaionLargeCard evalutaion={evalutaionEntity}>
 *   <p>Additional content for the middle column.</p>
 * </EvalutaionLargeCard>
 */
export const EvalutaionLargeCard = ({evalutaion, children}) => {
    return (
        <EvalutaionCardCapsule evalutaion={evalutaion} >
            <Row>
                <LeftColumn>
                    <EvalutaionMediumCard evalutaion={evalutaion}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </EvalutaionCardCapsule>
    )
}
