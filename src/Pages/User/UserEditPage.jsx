import { useParams } from "react-router-dom"

import { UserLazy as Lazy } from "../../Components/User/UserLazy";
import { UserLargeCard as LargeCard } from "../../Components/User/UserLargeCard";
import { UserCardCapsule as CardCapsule } from "../../Components/User/UserCardCapsule";
import { UserEditCard as EditCard } from "../../Components/User/UserEditCard";

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

export const UserEditPageContentBase = ({ user, children}) => {
    return (
        <LargeCard user={ user }>
            {/* other data */}
            <EditCard user={ user }/>
        </LargeCard>        
    );    
}

const UserLazyEditPageContent = Lazy(UserEditPageContentBase)(QueryAction, QueryActionValidator)

export const UserEditPage = () => {
    const params = useParams()
    return (<UserLazyEditPageContent {...params} />)

}
