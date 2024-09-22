import { useParams } from "react-router-dom"

import { PublicationtypeLazy as Lazy } from "../../Components/Publicationtype/PublicationtypeLazy";
import { PublicationtypeLargeCard as LargeCard } from "../../Components/Publicationtype/PublicationtypeLargeCard";
import { PublicationtypeCardCapsule as CardCapsule } from "../../Components/Publicationtype/PublicationtypeCardCapsule";
import { PublicationtypeEditCard as EditCard } from "../../Components/Publicationtype/PublicationtypeEditCard";

import { 
    PublicationtypePageQueryAction as QueryAction,
    PublicationtypePageQueryActionValidator as QueryActionValidator
} from "./PublicationtypePageQueryAction";

import { PublicationsTable as PublicationsTable6 } from '../../Components/Publication/PublicationsTable';

export const PublicationtypeEditPageContentBase = ({ publicationtype, children}) => {
    return (
        <LargeCard publicationtype={ publicationtype }>
            {/* other data */}
            <EditCard publicationtype={ publicationtype }/>
        </LargeCard>        
    );    
}

const PublicationtypeLazyEditPageContent = Lazy(PublicationtypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const PublicationtypeEditPage = () => {
    const params = useParams()
    return (<PublicationtypeLazyEditPageContent {...params} />)

}
