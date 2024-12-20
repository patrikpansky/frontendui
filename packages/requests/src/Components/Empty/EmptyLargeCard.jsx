import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { requestCardCapsule } from "./requestCardCapsule"
import { requestMediumCard } from "./requestMediumCard"

/**
 * A large card component for displaying detailed content and layout for an request entity.
 *
 * This component wraps an `requestCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `requestMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the requestLargeCard component.
 * @param {Object} props.request - The object representing the request entity.
 * @param {string|number} props.request.id - The unique identifier for the request entity.
 * @param {string} props.request.name - The name or label of the request entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const requestEntity = { id: 123, name: "Sample Entity" };
 * 
 * <requestLargeCard request={requestEntity}>
 *   <p>Additional content for the middle column.</p>
 * </requestLargeCard>
 */
export const requestLargeCard = ({request}) => {
    return (
        <requestCardCapsule request={request} >
            <Row>
                <LeftColumn>
                    <requestMediumCard request={request}/>
                </LeftColumn>
                <MiddleColumn>
                    {children}
                </MiddleColumn>
            </Row>
        </requestCardCapsule>
    )
}
