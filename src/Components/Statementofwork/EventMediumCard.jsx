// field event
// targeting to Event
// going from Statementofwork
import { EventMediumCard } from "../Event/EventMediumCard";

export const StatementofworkEventMediumCard = ({ statementofwork , ...props}) => {
    return (
        <EventMediumCard event={ statementofwork?.event } {...props} />
    )
}