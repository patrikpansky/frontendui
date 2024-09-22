import { useParams } from "react-router-dom"

import { PublicationauthorLazy as Lazy } from "../../Components/Publicationauthor/PublicationauthorLazy";
import { PublicationauthorLargeCard as LargeCard } from "../../Components/Publicationauthor/PublicationauthorLargeCard";
import { PublicationauthorCardCapsule as CardCapsule } from "../../Components/Publicationauthor/PublicationauthorCardCapsule";
import { PublicationauthorEditCard as EditCard } from "../../Components/Publicationauthor/PublicationauthorEditCard";

import { 
    AuthorPageQueryAction as QueryAction,
    AuthorPageQueryActionValidator as QueryActionValidator
} from "./AuthorPageQueryAction";


export const AuthorEditPageContentBase = ({ author, children}) => {
    return (
        <LargeCard author={ author }>
            {/* other data */}
            <EditCard author={ author }/>
        </LargeCard>        
    );    
}

const AuthorLazyEditPageContent = Lazy(AuthorEditPageContentBase)(QueryAction, QueryActionValidator)

export const AuthorEditPage = () => {
    const params = useParams()
    return (<AuthorLazyEditPageContent {...params} />)

}
