import { useParams } from "react-router-dom"

import { PublicationLazy as Lazy } from "../../Components/Publication/PublicationLazy";
import { PublicationLargeCard as LargeCard } from "../../Components/Publication/PublicationLargeCard";
import { PublicationCardCapsule as CardCapsule } from "../../Components/Publication/PublicationCardCapsule";

import { 
    PublicationPageQueryAction as QueryAction,
    PublicationPageQueryActionValidator as QueryActionValidator
} from "./PublicationPageQueryAction";

import { PublicationauthorsTable as AuthorsTable10 } from '../../Components/Publicationauthor/PublicationauthorsTable';
import { AcsubjectsTable as SubjectsTable12 } from '../../Components/Acsubject/AcsubjectsTable';

export const PublicationPageContentBase = ({ publication, children}) => {
    return (
        <LargeCard publication={ publication }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const PublicationPageContent = ({ publication }) => {

        return (
            <PublicationPageContentBase publication={ publication }>
                {/* other data */}
                { publication?.authors?
                    <CardCapsule publication={ publication } label={ "authors" }>
                        <AuthorsTable10 publicationauthors={ publication?.authors || []}/>
                    </CardCapsule>:null
                }
                { publication?.subjects?
                    <CardCapsule publication={ publication } label={ "subjects" }>
                        <SubjectsTable12 acsubjects={ publication?.subjects || []}/>
                    </CardCapsule>:null
                }
            </PublicationPageContentBase>        
        );    
}

const PublicationLazyPageContent = Lazy(PublicationPageContent)(QueryAction, QueryActionValidator)

export const PublicationPage = () => {
    const params = useParams()
    return (<PublicationLazyPageContent {...params} />)

}
