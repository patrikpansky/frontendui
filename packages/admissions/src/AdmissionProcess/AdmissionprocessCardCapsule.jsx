import { CardCapsule } from "@hrbolek/uoisfrontend-shared"
import { PersonFill } from "react-bootstrap-icons"
import { AdmissionprocessLink } from "./AdmissionprocessLink"

/**
 * A specialized card component that displays an `AdmissionprocessLink` as its title and encapsulates additional content.
 *
 * This component extends the `CardCapsule` component by using a combination of a `PersonFill` icon and 
 * an `AdmissionprocessLink` component in the card's header. The `children` prop is used to render any content 
 * inside the card body. It is designed for use with entities represented by the `admissionprocess` object.
 *
 * @component
 * @param {Object} props - The props for the AdmissionprocessCardCapsule component.
 * @param {Object} props.admissionprocess - The object representing the admissionprocess entity.
 * @param {string|number} props.admissionprocess.id - The unique identifier for the admissionprocess entity.
 * @param {string} props.admissionprocess.name - The display name for the admissionprocess entity.
 * @param {React.ReactNode} [props.children=null] - The content to render inside the card's body.
 *
 * @returns {JSX.Element} The rendered card component with a dynamic title and body content.
 *
 * @example
 * // Example usage:
 * import { AdmissionprocessCardCapsule } from './AdmissionprocessCardCapsule';
 * import { Button } from 'react-bootstrap';
 *
 * const admissionprocessEntity = { id: 123, name: "Example Entity" };
 *
 * <AdmissionprocessCardCapsule admissionprocess={admissionprocessEntity}>
 *   <Button variant="primary">Click Me</Button>
 * </AdmissionprocessCardCapsule>
 */
export const AdmissionprocessCardCapsule = ({admissionprocess, children, title=<><PersonFill /> <AdmissionprocessLink admissionprocess={admissionprocess} /></>}) => {
    return (
        <CardCapsule title={title}>
            {children}
        </CardCapsule>
    )
}
