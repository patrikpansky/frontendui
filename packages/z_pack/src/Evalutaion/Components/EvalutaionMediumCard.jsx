import { PersonFill } from "react-bootstrap-icons"
import { EvalutaionLink } from "./EvalutaionLink"
import { EvalutaionCardCapsule } from "./EvalutaionCardCapsule"
import { EvalutaionMediumContent } from "./EvalutaionMediumContent"

/**
 * A card component that displays detailed content for an evalutaion entity.
 *
 * This component combines `EvalutaionCardCapsule` and `EvalutaionMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the evalutaion entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the EvalutaionMediumCard component.
 * @param {Object} props.evalutaion - The object representing the evalutaion entity.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion entity.
 * @param {string} props.evalutaion.name - The name or label of the evalutaion entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const evalutaionEntity = { id: 123, name: "Sample Entity" };
 * 
 * <EvalutaionMediumCard evalutaion={evalutaionEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </EvalutaionMediumCard>
 */
export const EvalutaionMediumCard = ({evalutaion, children}) => {
    return (
        <EvalutaionCardCapsule title={<><PersonFill /> <EvalutaionLink evalutaion={evalutaion} /></>}>
            <EvalutaionMediumContent evalutaion={evalutaion}>
                {children}
            </EvalutaionMediumContent>
        </EvalutaionCardCapsule>
    )
}
