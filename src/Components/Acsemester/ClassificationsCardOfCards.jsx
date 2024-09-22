// field classifications
// targeting to AcClassification
// going from Acsemester
import { AcsemesterCardCapsule } from "./AcsemesterCardCapsule";
import { AcclassificationsCards } from "../Acclassification/AcclassificationsCards";
import { AcsemesterClassificationsLoadMoreButton as LoadMoreButton} from "../Acsemester/ClassificationsLoadMoreButton";

export const AcsemesterClassificationsCardOfCards = ({ acsemester, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } label={"Classifications"}>
            <AcclassificationsCards acclassifications={ acsemester?.classifications } {...props} >
                <LoadMoreButton acsemester={ acsemester } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcclassificationsCards>
        </AcsemesterCardCapsule>
    )
}