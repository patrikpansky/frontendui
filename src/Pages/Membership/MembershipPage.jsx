import { useParams } from "react-router-dom"

import { MembershipLazy as Lazy } from "../../Components/Membership/MembershipLazy";
import { MembershipLargeCard as LargeCard } from "../../Components/Membership/MembershipLargeCard";
import { MembershipCardCapsule as CardCapsule } from "../../Components/Membership/MembershipCardCapsule";

import { 
    MembershipPageQueryAction as QueryAction,
    MembershipPageQueryActionValidator as QueryActionValidator
} from "./MembershipPageQueryAction";


export const MembershipPageContentBase = ({ membership, children}) => {
    return (
        <LargeCard membership={ membership }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const MembershipPageContent = ({ membership }) => {

        return (
            <MembershipPageContentBase membership={ membership }>
                {/* other data */}
            </MembershipPageContentBase>        
        );    
}

const MembershipLazyPageContent = Lazy(MembershipPageContent)(QueryAction, QueryActionValidator)

export const MembershipPage = () => {
    const params = useParams()
    return (<MembershipLazyPageContent {...params} />)

}
