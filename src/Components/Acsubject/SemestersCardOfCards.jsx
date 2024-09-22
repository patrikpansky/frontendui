// field semesters
// targeting to AcSemester
// going from Acsubject
import { AcsubjectCardCapsule } from "./AcsubjectCardCapsule";
import { AcsemestersCards } from "../Acsemester/AcsemestersCards";
import { AcsubjectSemestersLoadMoreButton as LoadMoreButton} from "../Acsubject/SemestersLoadMoreButton";

export const AcsubjectSemestersCardOfCards = ({ acsubject, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcsubjectCardCapsule acsubject={ acsubject } label={"Semesters"}>
            <AcsemestersCards acsemesters={ acsubject?.semesters } {...props} >
                <LoadMoreButton acsubject={ acsubject } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcsemestersCards>
        </AcsubjectCardCapsule>
    )
}