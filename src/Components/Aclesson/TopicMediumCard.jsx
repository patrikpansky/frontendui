// field topic
// targeting to AcTopic
// going from Aclesson
import { ActopicMediumCard } from "../Actopic/ActopicMediumCard";

export const AclessonTopicMediumCard = ({ aclesson , ...props}) => {
    return (
        <ActopicMediumCard actopic={ aclesson?.topic } {...props} />
    )
}