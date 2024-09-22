import { useParams } from "react-router-dom"

import { PublicationLargeCard as LargeCard } from "../../Components/Publication/PublicationLargeCard";
import { PublicationCardCapsule as CardCapsule } from "../../Components/Publication/PublicationCardCapsule";
import { 
    PublicationLazy as Lazy,
} from "../../Components/Publication/PublicationLazy";

import { 
    PublicationPageQueryAction as QueryAction,
    PublicationPageQueryActionValidator as QueryActionValidator
} from "./PublicationPageQueryAction";

// import { PublicationauthorsCards as AuthorssCards10 } from '../../Components/Publicationauthor/PublicationauthorsCards';
import { PublicationAuthorsCardOfCards as AuthorsCards10 } from '../../Components/Publication/AuthorsCardOfCards';
// import { AcsubjectsCards as SubjectssCards12 } from '../../Components/Acsubject/AcsubjectsCards';
import { PublicationSubjectsCardOfCards as SubjectsCards12 } from '../../Components/Publication/SubjectsCardOfCards';

export const PublicationAuthorsPageContent = ({ publication }) => {
    return (
        <LargeCard publication={ publication }>
            {/* other data */}
            { publication?.authors?
                <AuthorsCards10 publication={ publication }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const PublicationSubjectsPageContent = ({ publication }) => {
    return (
        <LargeCard publication={ publication }>
            {/* other data */}
            { publication?.subjects?
                <SubjectsCards12 publication={ publication }/>
                :null 
            }
        </LargeCard>        
    );    
}

const PublicationAuthorsLazyPageContent = Lazy(PublicationAuthorsPageContent)(QueryAction, QueryActionValidator)
export const PublicationAuthorsCardPage = () => {
    const params = useParams()
    return (<PublicationAuthorsLazyPageContent {...params} />)
}

const PublicationSubjectsLazyPageContent = Lazy(PublicationSubjectsPageContent)(QueryAction, QueryActionValidator)
export const PublicationSubjectsCardPage = () => {
    const params = useParams()
    return (<PublicationSubjectsLazyPageContent {...params} />)
}

