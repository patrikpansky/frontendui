import { useParams } from "react-router-dom"

import { UserLazy as Lazy } from "../../Components/User/UserLazy";
import { UserLargeCard as LargeCard } from "../../Components/User/UserLargeCard";
import { UserCardCapsule as CardCapsule } from "../../Components/User/UserCardCapsule";

import { 
    UserPageQueryAction as QueryAction,
    UserPageQueryActionValidator as QueryActionValidator
} from "./UserPageQueryAction";

import { EventsTable as EventsTable1 } from '../../Components/Event/EventsTable';
import { PresencesTable as PresencesTable2 } from '../../Components/Presence/PresencesTable';
import { ExternalidsTable as ExternalidsTable3 } from '../../Components/Externalid/ExternalidsTable';
import { RequestsTable as RequestsTable4 } from '../../Components/Request/RequestsTable';
import { AcprogramstudentsTable as StudiesTable5 } from '../../Components/Acprogramstudent/AcprogramstudentsTable';
import { AcclassificationsTable as ClassificationsTable6 } from '../../Components/Acclassification/AcclassificationsTable';
import { PlannedlessonsTable as PlannedlessonsTable7 } from '../../Components/Plannedlesson/PlannedlessonsTable';
import { PublicationauthorsTable as AuthorpublicationsTable8 } from '../../Components/Publicationauthor/PublicationauthorsTable';
import { AnswersTable as AnswersTable9 } from '../../Components/Answer/AnswersTable';
import { RolesTable as RolesonTable22 } from '../../Components/Role/RolesTable';
import { MembershipsTable as MembershipsTable24 } from '../../Components/Membership/MembershipsTable';
import { MembershipsTable as MembershipTable25 } from '../../Components/Membership/MembershipsTable';
import { RolesTable as RolesTable26 } from '../../Components/Role/RolesTable';
import { GroupsTable as MemberofTable27 } from '../../Components/Group/GroupsTable';

export const UserPageContentBase = ({ user, children}) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const UserPageContent = ({ user }) => {

        return (
            <UserPageContentBase user={ user }>
                {/* other data */}
                { user?.events?
                    <CardCapsule user={ user } label={ "events" }>
                        <EventsTable1 events={ user?.events || []}/>
                    </CardCapsule>:null
                }
                { user?.presences?
                    <CardCapsule user={ user } label={ "presences" }>
                        <PresencesTable2 presences={ user?.presences || []}/>
                    </CardCapsule>:null
                }
                { user?.externalIds?
                    <CardCapsule user={ user } label={ "externalIds" }>
                        <ExternalidsTable3 externalids={ user?.externalIds || []}/>
                    </CardCapsule>:null
                }
                { user?.requests?
                    <CardCapsule user={ user } label={ "requests" }>
                        <RequestsTable4 requests={ user?.requests || []}/>
                    </CardCapsule>:null
                }
                { user?.studies?
                    <CardCapsule user={ user } label={ "studies" }>
                        <StudiesTable5 acprogramstudents={ user?.studies || []}/>
                    </CardCapsule>:null
                }
                { user?.classifications?
                    <CardCapsule user={ user } label={ "classifications" }>
                        <ClassificationsTable6 acclassifications={ user?.classifications || []}/>
                    </CardCapsule>:null
                }
                { user?.plannedLessons?
                    <CardCapsule user={ user } label={ "plannedLessons" }>
                        <PlannedlessonsTable7 plannedlessons={ user?.plannedLessons || []}/>
                    </CardCapsule>:null
                }
                { user?.authorPublications?
                    <CardCapsule user={ user } label={ "authorPublications" }>
                        <AuthorpublicationsTable8 publicationauthors={ user?.authorPublications || []}/>
                    </CardCapsule>:null
                }
                { user?.answers?
                    <CardCapsule user={ user } label={ "answers" }>
                        <AnswersTable9 answers={ user?.answers || []}/>
                    </CardCapsule>:null
                }
                { user?.rolesOn?
                    <CardCapsule user={ user } label={ "rolesOn" }>
                        <RolesonTable22 roles={ user?.rolesOn || []}/>
                    </CardCapsule>:null
                }
                { user?.memberships?
                    <CardCapsule user={ user } label={ "memberships" }>
                        <MembershipsTable24 memberships={ user?.memberships || []}/>
                    </CardCapsule>:null
                }
                { user?.membership?
                    <CardCapsule user={ user } label={ "membership" }>
                        <MembershipTable25 memberships={ user?.membership || []}/>
                    </CardCapsule>:null
                }
                { user?.roles?
                    <CardCapsule user={ user } label={ "roles" }>
                        <RolesTable26 roles={ user?.roles || []}/>
                    </CardCapsule>:null
                }
                { user?.memberOf?
                    <CardCapsule user={ user } label={ "memberOf" }>
                        <MemberofTable27 groups={ user?.memberOf || []}/>
                    </CardCapsule>:null
                }
            </UserPageContentBase>        
        );    
}

const UserLazyPageContent = Lazy(UserPageContent)(QueryAction, QueryActionValidator)

export const UserPage = () => {
    const params = useParams()
    return (<UserLazyPageContent {...params} />)

}
