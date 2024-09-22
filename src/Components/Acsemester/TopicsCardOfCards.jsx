// field topics
// targeting to AcTopic
// going from Acsemester
import { AcsemesterCardCapsule } from "./AcsemesterCardCapsule";
import { ActopicsCards } from "../Actopic/ActopicsCards";
import { AcsemesterTopicsLoadMoreButton as LoadMoreButton} from "../Acsemester/TopicsLoadMoreButton";

export const AcsemesterTopicsCardOfCards = ({ acsemester, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } label={"Topics"}>
            <ActopicsCards actopics={ acsemester?.topics } {...props} >
                <LoadMoreButton acsemester={ acsemester } skip={skip} limit={limit} orderby={orderby} where={where} />
            </ActopicsCards>
        </AcsemesterCardCapsule>
    )
}