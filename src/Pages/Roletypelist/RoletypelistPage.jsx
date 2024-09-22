import { useParams } from "react-router-dom"

import { RoletypelistLazy as Lazy } from "../../Components/Roletypelist/RoletypelistLazy";
import { RoletypelistLargeCard as LargeCard } from "../../Components/Roletypelist/RoletypelistLargeCard";
import { RoletypelistCardCapsule as CardCapsule } from "../../Components/Roletypelist/RoletypelistCardCapsule";

import { 
    RoletypelistPageQueryAction as QueryAction,
    RoletypelistPageQueryActionValidator as QueryActionValidator
} from "./RoletypelistPageQueryAction";

import { RoletypesTable as RoletypesTable5 } from '../../Components/Roletype/RoletypesTable';

export const RoletypelistPageContentBase = ({ roletypelist, children}) => {
    return (
        <LargeCard roletypelist={ roletypelist }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const RoletypelistPageContent = ({ roletypelist }) => {

        return (
            <RoletypelistPageContentBase roletypelist={ roletypelist }>
                {/* other data */}
                { roletypelist?.roletypes?
                    <CardCapsule roletypelist={ roletypelist } label={ "roletypes" }>
                        <RoletypesTable5 roletypes={ roletypelist?.roletypes || []}/>
                    </CardCapsule>:null
                }
            </RoletypelistPageContentBase>        
        );    
}

const RoletypelistLazyPageContent = Lazy(RoletypelistPageContent)(QueryAction, QueryActionValidator)

export const RoletypelistPage = () => {
    const params = useParams()
    return (<RoletypelistLazyPageContent {...params} />)

}
