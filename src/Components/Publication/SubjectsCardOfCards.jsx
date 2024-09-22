// field subjects
// targeting to AcSubject
// going from Publication
import { PublicationCardCapsule } from "./PublicationCardCapsule";
import { AcsubjectsCards } from "../Acsubject/AcsubjectsCards";
import { PublicationSubjectsLoadMoreButton as LoadMoreButton} from "../Publication/SubjectsLoadMoreButton";

export const PublicationSubjectsCardOfCards = ({ publication, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <PublicationCardCapsule publication={ publication } label={"Subjects"}>
            <AcsubjectsCards acsubjects={ publication?.subjects } {...props} >
                <LoadMoreButton publication={ publication } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcsubjectsCards>
        </PublicationCardCapsule>
    )
}