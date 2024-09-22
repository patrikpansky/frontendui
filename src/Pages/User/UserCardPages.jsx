import { useParams } from "react-router-dom"

import { UserLargeCard as LargeCard } from "../../Components/User/UserLargeCard";
import { UserCardCapsule as CardCapsule } from "../../Components/User/UserCardCapsule";
import { 
    UserLazy as Lazy,
} from "../../Components/User/UserLazy";

import { 
    UserPageQueryAction as QueryAction,
    UserPageQueryActionValidator as QueryActionValidator
} from "./UserPageQueryAction";

// import { EventsCards as EventssCards1 } from '../../Components/Event/EventsCards';
import { UserEventsCardOfCards as EventsCards1 } from '../../Components/User/EventsCardOfCards';
// import { PresencesCards as PresencessCards2 } from '../../Components/Presence/PresencesCards';
import { UserPresencesCardOfCards as PresencesCards2 } from '../../Components/User/PresencesCardOfCards';
// import { ExternalidsCards as ExternalidssCards3 } from '../../Components/Externalid/ExternalidsCards';
import { UserExternalidsCardOfCards as ExternalidsCards3 } from '../../Components/User/ExternalidsCardOfCards';
// import { RequestsCards as RequestssCards4 } from '../../Components/Request/RequestsCards';
import { UserRequestsCardOfCards as RequestsCards4 } from '../../Components/User/RequestsCardOfCards';
// import { AcprogramstudentsCards as StudiessCards5 } from '../../Components/Acprogramstudent/AcprogramstudentsCards';
import { UserStudiesCardOfCards as StudiesCards5 } from '../../Components/User/StudiesCardOfCards';
// import { AcclassificationsCards as ClassificationssCards6 } from '../../Components/Acclassification/AcclassificationsCards';
import { UserClassificationsCardOfCards as ClassificationsCards6 } from '../../Components/User/ClassificationsCardOfCards';
// import { PlannedlessonsCards as PlannedlessonssCards7 } from '../../Components/Plannedlesson/PlannedlessonsCards';
import { UserPlannedlessonsCardOfCards as PlannedlessonsCards7 } from '../../Components/User/PlannedlessonsCardOfCards';
// import { PublicationauthorsCards as AuthorpublicationssCards8 } from '../../Components/Publicationauthor/PublicationauthorsCards';
import { UserAuthorpublicationsCardOfCards as AuthorpublicationsCards8 } from '../../Components/User/AuthorpublicationsCardOfCards';
// import { AnswersCards as AnswerssCards9 } from '../../Components/Answer/AnswersCards';
import { UserAnswersCardOfCards as AnswersCards9 } from '../../Components/User/AnswersCardOfCards';
// import { RolesCards as RolesonsCards22 } from '../../Components/Role/RolesCards';
import { UserRolesonCardOfCards as RolesonCards22 } from '../../Components/User/RolesonCardOfCards';
// import { MembershipsCards as MembershipssCards24 } from '../../Components/Membership/MembershipsCards';
import { UserMembershipsCardOfCards as MembershipsCards24 } from '../../Components/User/MembershipsCardOfCards';
// import { MembershipsCards as MembershipsCards25 } from '../../Components/Membership/MembershipsCards';
import { UserMembershipCardOfCards as MembershipCards25 } from '../../Components/User/MembershipCardOfCards';
// import { RolesCards as RolessCards26 } from '../../Components/Role/RolesCards';
import { UserRolesCardOfCards as RolesCards26 } from '../../Components/User/RolesCardOfCards';
// import { GroupsCards as MemberofsCards27 } from '../../Components/Group/GroupsCards';
import { UserMemberofCardOfCards as MemberofCards27 } from '../../Components/User/MemberofCardOfCards';

export const UserEventsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.events?
                <EventsCards1 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserPresencesPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.presences?
                <PresencesCards2 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserExternalidsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.externalIds?
                <ExternalidsCards3 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserRequestsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.requests?
                <RequestsCards4 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserStudiesPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.studies?
                <StudiesCards5 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserClassificationsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.classifications?
                <ClassificationsCards6 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserPlannedlessonsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.plannedLessons?
                <PlannedlessonsCards7 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserAuthorpublicationsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.authorPublications?
                <AuthorpublicationsCards8 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserAnswersPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.answers?
                <AnswersCards9 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserRolesonPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.rolesOn?
                <RolesonCards22 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserMembershipsPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.memberships?
                <MembershipsCards24 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserMembershipPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.membership?
                <MembershipCards25 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserRolesPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.roles?
                <RolesCards26 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const UserMemberofPageContent = ({ user }) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            { user?.memberOf?
                <MemberofCards27 user={ user }/>
                :null 
            }
        </LargeCard>        
    );    
}

const UserEventsLazyPageContent = Lazy(UserEventsPageContent)(QueryAction, QueryActionValidator)
export const UserEventsCardPage = () => {
    const params = useParams()
    return (<UserEventsLazyPageContent {...params} />)
}

const UserPresencesLazyPageContent = Lazy(UserPresencesPageContent)(QueryAction, QueryActionValidator)
export const UserPresencesCardPage = () => {
    const params = useParams()
    return (<UserPresencesLazyPageContent {...params} />)
}

const UserExternalidsLazyPageContent = Lazy(UserExternalidsPageContent)(QueryAction, QueryActionValidator)
export const UserExternalidsCardPage = () => {
    const params = useParams()
    return (<UserExternalidsLazyPageContent {...params} />)
}

const UserRequestsLazyPageContent = Lazy(UserRequestsPageContent)(QueryAction, QueryActionValidator)
export const UserRequestsCardPage = () => {
    const params = useParams()
    return (<UserRequestsLazyPageContent {...params} />)
}

const UserStudiesLazyPageContent = Lazy(UserStudiesPageContent)(QueryAction, QueryActionValidator)
export const UserStudiesCardPage = () => {
    const params = useParams()
    return (<UserStudiesLazyPageContent {...params} />)
}

const UserClassificationsLazyPageContent = Lazy(UserClassificationsPageContent)(QueryAction, QueryActionValidator)
export const UserClassificationsCardPage = () => {
    const params = useParams()
    return (<UserClassificationsLazyPageContent {...params} />)
}

const UserPlannedlessonsLazyPageContent = Lazy(UserPlannedlessonsPageContent)(QueryAction, QueryActionValidator)
export const UserPlannedlessonsCardPage = () => {
    const params = useParams()
    return (<UserPlannedlessonsLazyPageContent {...params} />)
}

const UserAuthorpublicationsLazyPageContent = Lazy(UserAuthorpublicationsPageContent)(QueryAction, QueryActionValidator)
export const UserAuthorpublicationsCardPage = () => {
    const params = useParams()
    return (<UserAuthorpublicationsLazyPageContent {...params} />)
}

const UserAnswersLazyPageContent = Lazy(UserAnswersPageContent)(QueryAction, QueryActionValidator)
export const UserAnswersCardPage = () => {
    const params = useParams()
    return (<UserAnswersLazyPageContent {...params} />)
}

const UserRolesonLazyPageContent = Lazy(UserRolesonPageContent)(QueryAction, QueryActionValidator)
export const UserRolesonCardPage = () => {
    const params = useParams()
    return (<UserRolesonLazyPageContent {...params} />)
}

const UserMembershipsLazyPageContent = Lazy(UserMembershipsPageContent)(QueryAction, QueryActionValidator)
export const UserMembershipsCardPage = () => {
    const params = useParams()
    return (<UserMembershipsLazyPageContent {...params} />)
}

const UserMembershipLazyPageContent = Lazy(UserMembershipPageContent)(QueryAction, QueryActionValidator)
export const UserMembershipCardPage = () => {
    const params = useParams()
    return (<UserMembershipLazyPageContent {...params} />)
}

const UserRolesLazyPageContent = Lazy(UserRolesPageContent)(QueryAction, QueryActionValidator)
export const UserRolesCardPage = () => {
    const params = useParams()
    return (<UserRolesLazyPageContent {...params} />)
}

const UserMemberofLazyPageContent = Lazy(UserMemberofPageContent)(QueryAction, QueryActionValidator)
export const UserMemberofCardPage = () => {
    const params = useParams()
    return (<UserMemberofLazyPageContent {...params} />)
}

