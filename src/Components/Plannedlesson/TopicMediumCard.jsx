// field topic
// targeting to AcTopic
// going from Plannedlesson
import { ActopicMediumCard } from "../Actopic/ActopicMediumCard";

export const PlannedlessonTopicMediumCard = ({ plannedlesson , ...props}) => {
    return (
        <ActopicMediumCard actopic={ plannedlesson?.topic } {...props} />
    )
}