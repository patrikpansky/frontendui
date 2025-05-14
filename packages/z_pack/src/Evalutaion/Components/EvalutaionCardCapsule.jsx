import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { EvalutaionLink } from "./EvalutaionLink"

/**
 * A specialized card component that displays an `EvalutaionLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `EvalutaionLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `evalutaion` object.
 *
 * @component
 * @param {Object} props - The props for the EvalutaionCardCapsule component.
 * @param {Object} props.evalutaion - The object representing the evalutaion entity.
 * @param {string|number} props.evalutaion.id - The unique identifier for the evalutaion entity.
 * @param {string} props.evalutaion.name - The display name for the evalutaion entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { EvalutaionCardCapsule } from './EvalutaionCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const evalutaionEntity = { id: 123, name: "Example Entity" };
 *
 * <EvalutaionCardCapsule evalutaion={evalutaionEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </EvalutaionCardCapsule>
 */
export const EvalutaionCardCapsule = ({evalutaion, children, title=<><PersonFill /> <EvalutaionLink evalutaion={evalutaion} /></>}) => {
    return (
        <CardCapsule title={title}>
            {children}
        </CardCapsule>
    )
}
