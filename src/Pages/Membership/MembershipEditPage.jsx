import { useParams } from "react-router-dom"

import { MembershipLazy as Lazy } from "../../Components/Membership/MembershipLazy";
import { MembershipLargeCard as LargeCard } from "../../Components/Membership/MembershipLargeCard";
import { MembershipCardCapsule as CardCapsule } from "../../Components/Membership/MembershipCardCapsule";
import { MembershipEditCard as EditCard } from "../../Components/Membership/MembershipEditCard";

import { 
    MembershipPageQueryAction as QueryAction,
    MembershipPageQueryActionValidator as QueryActionValidator
} from "./MembershipPageQueryAction";


export const MembershipEditPageContentBase = ({ membership, children}) => {
    return (
        <LargeCard membership={ membership }>
            {/* other data */}
            <EditCard membership={ membership }/>
        </LargeCard>        
    );    
}

const MembershipLazyEditPageContent = Lazy(MembershipEditPageContentBase)(QueryAction, QueryActionValidator)

export const MembershipEditPage = () => {
    const params = useParams()
    return (<MembershipLazyEditPageContent {...params} />)

}
