import { useParams } from "react-router-dom"

import { PublicationtypeLargeCard as LargeCard } from "../../Components/Publicationtype/PublicationtypeLargeCard";
import { PublicationtypeCardCapsule as CardCapsule } from "../../Components/Publicationtype/PublicationtypeCardCapsule";
import { 
    PublicationtypeLazy as Lazy,
} from "../../Components/Publicationtype/PublicationtypeLazy";

import { 
    PublicationtypePageQueryAction as QueryAction,
    PublicationtypePageQueryActionValidator as QueryActionValidator
} from "./PublicationtypePageQueryAction";

// import { PublicationsCards as PublicationssCards6 } from '../../Components/Publication/PublicationsCards';
import { PublicationtypePublicationsCardOfCards as PublicationsCards6 } from '../../Components/Publicationtype/PublicationsCardOfCards';

export const PublicationtypePublicationsPageContent = ({ publicationtype }) => {
    return (
        <LargeCard publicationtype={ publicationtype }>
            {/* other data */}
            { publicationtype?.publications?
                <PublicationsCards6 publicationtype={ publicationtype }/>
                :null 
            }
        </LargeCard>        
    );    
}

const PublicationtypePublicationsLazyPageContent = Lazy(PublicationtypePublicationsPageContent)(QueryAction, QueryActionValidator)
export const PublicationtypePublicationsCardPage = () => {
    const params = useParams()
    return (<PublicationtypePublicationsLazyPageContent {...params} />)
}

