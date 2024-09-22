// field subjects
// targeting to AcSubject
// going from Acprogram
import { AcprogramCardCapsule } from "./AcprogramCardCapsule";
import { AcsubjectsCards } from "../Acsubject/AcsubjectsCards";
import { AcprogramSubjectsLoadMoreButton as LoadMoreButton} from "../Acprogram/SubjectsLoadMoreButton";

export const AcprogramSubjectsCardOfCards = ({ acprogram, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } label={"Subjects"}>
            <AcsubjectsCards acsubjects={ acprogram?.subjects } {...props} >
                <LoadMoreButton acprogram={ acprogram } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcsubjectsCards>
        </AcprogramCardCapsule>
    )
}