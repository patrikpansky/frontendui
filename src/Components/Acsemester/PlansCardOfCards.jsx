// field plans
// targeting to Plan
// going from Acsemester
import { AcsemesterCardCapsule } from "./AcsemesterCardCapsule";
import { PlansCards } from "../Plan/PlansCards";
import { AcsemesterPlansLoadMoreButton as LoadMoreButton} from "../Acsemester/PlansLoadMoreButton";

export const AcsemesterPlansCardOfCards = ({ acsemester, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } label={"Plans"}>
            <PlansCards plans={ acsemester?.plans } {...props} >
                <LoadMoreButton acsemester={ acsemester } skip={skip} limit={limit} orderby={orderby} where={where} />
            </PlansCards>
        </AcsemesterCardCapsule>
    )
}