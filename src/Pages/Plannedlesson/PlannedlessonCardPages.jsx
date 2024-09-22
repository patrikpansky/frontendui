import { useParams } from "react-router-dom"

import { PlannedlessonLargeCard as LargeCard } from "../../Components/Plannedlesson/PlannedlessonLargeCard";
import { PlannedlessonCardCapsule as CardCapsule } from "../../Components/Plannedlesson/PlannedlessonCardCapsule";
import { 
    PlannedlessonLazy as Lazy,
} from "../../Components/Plannedlesson/PlannedlessonLazy";

import { 
    PlannedlessonPageQueryAction as QueryAction,
    PlannedlessonPageQueryActionValidator as QueryActionValidator
} from "./PlannedlessonPageQueryAction";

// import { PlannedlessonsCards as LinkedwithsCards11 } from '../../Components/Plannedlesson/PlannedlessonsCards';
import { PlannedlessonLinkedwithCardOfCards as LinkedwithCards11 } from '../../Components/Plannedlesson/LinkedwithCardOfCards';
// import { UsersCards as UserssCards12 } from '../../Components/User/UsersCards';
import { PlannedlessonUsersCardOfCards as UsersCards12 } from '../../Components/Plannedlesson/UsersCardOfCards';
// import { GroupsCards as GroupssCards13 } from '../../Components/Group/GroupsCards';
import { PlannedlessonGroupsCardOfCards as GroupsCards13 } from '../../Components/Plannedlesson/GroupsCardOfCards';
// import { FacilitysCards as FacilitiessCards14 } from '../../Components/Facility/FacilitysCards';
import { PlannedlessonFacilitiesCardOfCards as FacilitiesCards14 } from '../../Components/Plannedlesson/FacilitiesCardOfCards';

export const PlannedlessonLinkedwithPageContent = ({ plannedlesson }) => {
    return (
        <LargeCard plannedlesson={ plannedlesson }>
            {/* other data */}
            { plannedlesson?.linkedWith?
                <LinkedwithCards11 plannedlesson={ plannedlesson }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const PlannedlessonUsersPageContent = ({ plannedlesson }) => {
    return (
        <LargeCard plannedlesson={ plannedlesson }>
            {/* other data */}
            { plannedlesson?.users?
                <UsersCards12 plannedlesson={ plannedlesson }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const PlannedlessonGroupsPageContent = ({ plannedlesson }) => {
    return (
        <LargeCard plannedlesson={ plannedlesson }>
            {/* other data */}
            { plannedlesson?.groups?
                <GroupsCards13 plannedlesson={ plannedlesson }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const PlannedlessonFacilitiesPageContent = ({ plannedlesson }) => {
    return (
        <LargeCard plannedlesson={ plannedlesson }>
            {/* other data */}
            { plannedlesson?.facilities?
                <FacilitiesCards14 plannedlesson={ plannedlesson }/>
                :null 
            }
        </LargeCard>        
    );    
}

const PlannedlessonLinkedwithLazyPageContent = Lazy(PlannedlessonLinkedwithPageContent)(QueryAction, QueryActionValidator)
export const PlannedlessonLinkedwithCardPage = () => {
    const params = useParams()
    return (<PlannedlessonLinkedwithLazyPageContent {...params} />)
}

const PlannedlessonUsersLazyPageContent = Lazy(PlannedlessonUsersPageContent)(QueryAction, QueryActionValidator)
export const PlannedlessonUsersCardPage = () => {
    const params = useParams()
    return (<PlannedlessonUsersLazyPageContent {...params} />)
}

const PlannedlessonGroupsLazyPageContent = Lazy(PlannedlessonGroupsPageContent)(QueryAction, QueryActionValidator)
export const PlannedlessonGroupsCardPage = () => {
    const params = useParams()
    return (<PlannedlessonGroupsLazyPageContent {...params} />)
}

const PlannedlessonFacilitiesLazyPageContent = Lazy(PlannedlessonFacilitiesPageContent)(QueryAction, QueryActionValidator)
export const PlannedlessonFacilitiesCardPage = () => {
    const params = useParams()
    return (<PlannedlessonFacilitiesLazyPageContent {...params} />)
}

