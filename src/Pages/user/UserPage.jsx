// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../../Components"
import { CreateAsyncQueryValidator, createLazyComponent, CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"
import { UserEventsCard } from "../../Components/User/UserEventsCard"

// export const CreateAsyncQueryValidator2 = (reactions) => {
//     const [onResolve, onReject] = CreateAsyncQueryValidator(reactions)
//     return (actionwithvariables) => (dispatch /*, getState*/) => {
//         return actionwithvariables(dispatch).then(onResolve, onReject)
//     }
// }

export const CreateAsyncQueryValidator3 = (reactions) => {
    const validator = CreateAsyncQueryValidator(reactions)
    return (dispatch) => {
        const [onResolve, onReject] = validator(dispatch)
        return (dispatchedFetch) => {
            return dispatchedFetch.then(onResolve, onReject)
        }
    }
}

const readquery = `
{
  me {
    __typename
    id
    lastchange
    name
    surname
    fullname
    email
    roles(where: {valid: {_eq: true}}) {
      __typename
      id
      roletype {
        id
        name
      }
      group {
        id
        name
      }
      valid
      startdate
      enddate
      lastchange
      changedby {
        id
        fullname
      }
    }
    memberships(where: {valid: {_eq: true}}) {
      id
      group {
        id
        name
        grouptype {
          id
          name
        }
      }
      valid
      startdate
      enddate
    }
    created
    createdby {
      id
      email
    }
    changedby {
      id
      name
    }
    rbacobject {
      id
    }
  }
}
`
/**
 * Asynchronous Redux action to fetch user data using a GraphQL query.
 *
 * @constant
 * @type {Function}
 * @param {Object} variables - Variables to pass to the GraphQL query.
 * @param {string} variables.id - The ID of the user to fetch.
 * @returns {Promise<Object>} A promise resolving to the user data fetched from the server.
 *
 * @example
 * // Dispatch the action with a user ID
 * dispatch(UserAsyncActionRead({ id: "12345" }))
 *   .then((response) => {
 *       console.log("User data:", response);
 *   })
 *   .catch((error) => {
 *       console.error("Error fetching user data:", error);
 *   });
 */
const UserAsyncActionRead = CreateAsyncActionFromQuery(readquery);

/**
 * Component to render the main content of the user page.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.user - The user object containing user details.
 * @returns {JSX.Element} The rendered user page content.
 *
 * @example
 * <UserPageContent user={user} />
 */
const UserPageContent = ({ user }) => (
    <UserLargeCard user={user}>
        <UserEventsCard user={user} />
    </UserLargeCard>
);

/**
 * A lazy-loading wrapper for the UserPageContent component.
 * Fetches user data dynamically using the `user` prop.
 *
 * @constant
 * @type {React.Component}
 *
 * @example
 * <UserPageContentLazy user={{ id: "12345" }} />
 */
const UserPageContentLazy = createLazyComponent(UserPageContent, "user", UserAsyncActionRead);

/**
 * The main user page component that renders user details.
 *
 * @returns {JSX.Element} The user page with dynamic content.
 *
 * @example
 * // Rendered via React Router
 * <Route path="/user/:id" element={<UserPage />} />
 */
export const UserPage = () => {
    const { id } = useParams();

    return <UserPageContentLazy user={{ id }} />;
};
