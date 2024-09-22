import { useParams } from "react-router-dom"

import { RoletypelistLargeCard as LargeCard } from "../../Components/Roletypelist/RoletypelistLargeCard";
import { RoletypelistCardCapsule as CardCapsule } from "../../Components/Roletypelist/RoletypelistCardCapsule";
import { 
    RoletypelistLazy as Lazy,
} from "../../Components/Roletypelist/RoletypelistLazy";

import { 
    RoletypelistPageQueryAction as QueryAction,
    RoletypelistPageQueryActionValidator as QueryActionValidator
} from "./RoletypelistPageQueryAction";

// import { RoletypesCards as RoletypessCards5 } from '../../Components/Roletype/RoletypesCards';
import { RoletypelistRoletypesCardOfCards as RoletypesCards5 } from '../../Components/Roletypelist/RoletypesCardOfCards';

export const RoletypelistRoletypesPageContent = ({ roletypelist }) => {
    return (
        <LargeCard roletypelist={ roletypelist }>
            {/* other data */}
            { roletypelist?.roletypes?
                <RoletypesCards5 roletypelist={ roletypelist }/>
                :null 
            }
        </LargeCard>        
    );    
}

const RoletypelistRoletypesLazyPageContent = Lazy(RoletypelistRoletypesPageContent)(QueryAction, QueryActionValidator)
export const RoletypelistRoletypesCardPage = () => {
    const params = useParams()
    return (<RoletypelistRoletypesLazyPageContent {...params} />)
}

