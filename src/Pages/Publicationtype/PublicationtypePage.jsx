import { useParams } from "react-router-dom"

import { PublicationtypeLazy as Lazy } from "../../Components/Publicationtype/PublicationtypeLazy";
import { PublicationtypeLargeCard as LargeCard } from "../../Components/Publicationtype/PublicationtypeLargeCard";
import { PublicationtypeCardCapsule as CardCapsule } from "../../Components/Publicationtype/PublicationtypeCardCapsule";

import { 
    PublicationtypePageQueryAction as QueryAction,
    PublicationtypePageQueryActionValidator as QueryActionValidator
} from "./PublicationtypePageQueryAction";

import { PublicationsTable as PublicationsTable6 } from '../../Components/Publication/PublicationsTable';

export const PublicationtypePageContentBase = ({ publicationtype, children}) => {
    return (
        <LargeCard publicationtype={ publicationtype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const PublicationtypePageContent = ({ publicationtype }) => {

        return (
            <PublicationtypePageContentBase publicationtype={ publicationtype }>
                {/* other data */}
                { publicationtype?.publications?
                    <CardCapsule publicationtype={ publicationtype } label={ "publications" }>
                        <PublicationsTable6 publications={ publicationtype?.publications || []}/>
                    </CardCapsule>:null
                }
            </PublicationtypePageContentBase>        
        );    
}

const PublicationtypeLazyPageContent = Lazy(PublicationtypePageContent)(QueryAction, QueryActionValidator)

export const PublicationtypePage = () => {
    const params = useParams()
    return (<PublicationtypeLazyPageContent {...params} />)

}
