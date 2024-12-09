// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { GroupLargeCard } from "../../Components"
import { createLazyComponent, CreateAsyncActionFromQueryWithMiddlewares } from "@hrbolek/uoisfrontend-shared/src"
import { GroupEventsCard } from "../../Components/Group/GroupEventsCard"
import { GroupSubgroupsCard } from "../../Components/Group/GroupSubgroupsCard"
import { GroupMembersCard, GroupMembershipsInfinityComponent } from "../../Components/Group/GroupMembersCard"

const readquery = `
query GroupById($id: UUID!) {
  result: groupById(id: $id) {
    ...Group
  }
}

fragment Group on GroupGQLModel {
	__typename
  id
  lastchange
  name
  nameEn
  abbreviation
  
  created
  createdby { id email }
  changedby { id email }
  
  email
  valid
  grouptype { id name }
  subgroups { id name valid grouptype { id name } }
  mastergroup { id name }

  memberships(limit: 1) {
    id
    lastchange
    startdate
    enddate
    valid
    user { id fullname }
  }

  roles {
    id
    valid
    user { id fullname }
    roletype { id name }
  }
}

`
/**
 * Asynchronous Redux action to fetch group data using a GraphQL query.
 *
 * @constant
 * @type {Function}
 * @param {Object} variables - Variables to pass to the GraphQL query.
 * @param {string} variables.id - The ID of the group to fetch.
 * @returns {Promise<Object>} A promise resolving to the group data fetched from the server.
 *
 * @example
 * // Dispatch the action with a group ID
 * dispatch(GroupAsyncActionRead({ id: "12345" }))
 *   .then((response) => {
 *       console.log("Group data:", response);
 *   })
 *   .catch((error) => {
 *       console.error("Error fetching group data:", error);
 *   });
 */
const GroupAsyncActionRead = CreateAsyncActionFromQueryWithMiddlewares(readquery);

/**
 * Component to render the main content of the group page.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.group - The group object containing group details.
 * @returns {JSX.Element} The rendered group page content.
 *
 * @example
 * <GroupPageContent group={group} />
 */
const GroupPageContent = ({ group }) => {
    return (
        <GroupLargeCard group={group}>
            {/* <GroupSubgroupsCard group={group} /> */}
            <GroupMembersCard group={group} />
            <GroupMembershipsInfinityComponent group={group} />
        </GroupLargeCard>
    )
};

/**
 * A lazy-loading wrapper for the GroupPageContent component.
 * Fetches group data dynamically using the `group` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @example
 * <GroupPageContentLazy group={{ id: "12345" }} />
 */
const GroupPageContentLazy = createLazyComponent(GroupPageContent, "group", GroupAsyncActionRead);

/**
 * The main group page component that renders group details.
 *
 * @returns {JSX.Element} The group page with dynamic content.
 *
 * @example
 * // Rendered via React Router
 * <Route path="/group/:id" element={<GroupPage />} />
 */
export const GroupPage = () => {
    const { id } = useParams();

    return <GroupPageContentLazy group={{ id }} />;
};
