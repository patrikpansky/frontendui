import { useParams } from "react-router-dom"

import { PublicationLazy as Lazy } from "../../Components/Publication/PublicationLazy";
import { PublicationLargeCard as LargeCard } from "../../Components/Publication/PublicationLargeCard";
import { PublicationCardCapsule as CardCapsule } from "../../Components/Publication/PublicationCardCapsule";
import { PublicationEditCard as EditCard } from "../../Components/Publication/PublicationEditCard";

import { 
    PublicationPageQueryAction as QueryAction,
    PublicationPageQueryActionValidator as QueryActionValidator
} from "./PublicationPageQueryAction";

import { PublicationauthorsTable as AuthorsTable10 } from '../../Components/Publicationauthor/PublicationauthorsTable';
import { AcsubjectsTable as SubjectsTable12 } from '../../Components/Acsubject/AcsubjectsTable';

export const PublicationEditPageContentBase = ({ publication, children}) => {
    return (
        <LargeCard publication={ publication }>
            {/* other data */}
            <EditCard publication={ publication }/>
        </LargeCard>        
    );    
}

const PublicationLazyEditPageContent = Lazy(PublicationEditPageContentBase)(QueryAction, QueryActionValidator)

export const PublicationEditPage = () => {
    const params = useParams()
    return (<PublicationLazyEditPageContent {...params} />)

}
