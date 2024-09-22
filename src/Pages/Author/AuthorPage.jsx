import { useParams } from "react-router-dom"

import { PublicationauthorLazy as Lazy } from "../../Components/Publicationauthor/PublicationauthorLazy";
import { PublicationauthorLargeCard as LargeCard } from "../../Components/Publicationauthor/PublicationauthorLargeCard";
import { PublicationauthorCardCapsule as CardCapsule } from "../../Components/Publicationauthor/PublicationauthorCardCapsule";

import { 
    AuthorPageQueryAction as QueryAction,
    AuthorPageQueryActionValidator as QueryActionValidator
} from "./AuthorPageQueryAction";


export const AuthorPageContentBase = ({ author, children}) => {
    return (
        <LargeCard author={ author }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AuthorPageContent = ({ author }) => {

        return (
            <AuthorPageContentBase author={ author }>
                {/* other data */}
            </AuthorPageContentBase>        
        );    
}

const AuthorLazyPageContent = Lazy(AuthorPageContent)(QueryAction, QueryActionValidator)

export const AuthorPage = () => {
    const params = useParams()
    return (<AuthorLazyPageContent {...params} />)

}
