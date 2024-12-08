// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../../Components"
import { useFreshItem, CreateAsyncActionFromQuery, createDefferedComponentWithLazyLoading, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { UserEventsCard } from "../../Components/User/UserEventsCard"
import { useEffect, useRef, useState } from "react"
import { EventsCalendar } from "../../Components/Event/EventsCalendar"
import { useSelector } from "react-redux"


const readqueryevents = `
query UserReadEvents($id: UUID!, $skip: Int, $limit: Int, $where: UGEventInputFilter){
  result: userById(id: $id) {
    id
    events(skip: $skip, limit: $limit, where: $where) {
        ...Event
    }
}
}

fragment Event on EventGQLModel {
	__typename
  id
  lastchange
  name
  nameEn
  startdate
  enddate
  duration
  description
  
  place
  placeId
  
  eventType { id name }
  
  created
  createdby { id email }
  changedby { id email } 
  
  users { id fullname email }
  groups { id name }
  masterEvent { id name }

}
`

const readquery = `
query ($id: UUID!) {
  userById(id: $id) {
    __typename
    id
    lastchange
    name
    surname
    fullname
    email
    rolesOn {
      __typename
      id
      valid
      roletype {
        id
        name
      }
			user {
        id
        fullname
        email
      }      
    }
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



// /**
//  * Wraps the result of CreateAsyncActionFromQuery and adds an additional function call.
//  *
//  * @param {Function} asyncActionCreator - The async action creator returned by CreateAsyncActionFromQuery.
//  * @param {Function} additionalFunction - A function to call during the async action process.
//  * @param {string} [hook="after"] - When to call the additional function ("before" or "after").
//  * @returns {Function} A new async action creator with the additional function call.
//  */
// export const WrapAsyncActionWithFunction = (asyncActionCreator, additionalFunction, hook = "after") => {
//     if (typeof asyncActionCreator !== "function") {
//         throw new Error("WrapAsyncActionWithFunction: asyncActionCreator must be a function.");
//     }

//     if (typeof additionalFunction !== "function") {
//         throw new Error("WrapAsyncActionWithFunction: additionalFunction must be a function.");
//     }

//     return (query_variables) => async (dispatch, getState) => {
//         const result = await asyncActionCreator(query_variables)(dispatch, getState);
//         additionalFunction(result, dispatch, getState);
//         return result;
//     };
// };


// const UserEventsAsyncActionRead = WrapAsyncActionWithFunction(
//     CreateAsyncActionFromQuery(readqueryevents), 
//     (json) => console.log("UserEventsAsyncActionRead", json)
// )
 
const UserEventsAsyncActionRead = CreateAsyncActionFromQuery(readqueryevents)

// const createLazyComponent = (WrappedComponent, entityName, asyncAction) => {
//     function LazyComponent(props) {
//         const entityValue = props[entityName];
//         const [result, promise, state] = useFreshItem(entityValue, asyncAction);

//         if (state.loading) {
//             return <div>Nahrávám...</div>;
//         }

//         if (state.errors) {
//             return (
//                 <div>
//                     <h2>Error</h2>
//                     <p>{state.errors}</p>
//                 </div>
//             );
//         }

//         if (result) {
//             // Dynamically set the entity name in props
//             const wrappedProps = {
//                 ...props,
//                 [entityName]: result,
//             };

//             return <WrappedComponent {...wrappedProps} />;
//         }

//         return (
//             <div>
//                 <h2>Unexpected Error</h2>
//                 <p>{state.errors || "Unknown issue occurred."}</p>
//                 <p>{JSON.stringify(state, null, 4)}</p>
//             </div>
//         );
//     }
//     LazyComponent.displayName = `Lazy${entityName}Component`;
//     return LazyComponent
// };

// /**
//  * Higher-Order Component to:
//  * 1. Lazily fetch data when the component becomes visible in the viewport.
//  * 2. Render the wrapped component only after data is fetched.
//  *
//  * @param {React.ComponentType} WrappedComponent - The component to wrap.
//  * @param {string} entityName - The name of the entity prop.
//  * @param {Function} asyncAction - The async Redux action to fetch the entity.
//  * @returns {React.ComponentType} A wrapped component with both lazy loading and lazy data fetching.
//  */
// export const createLazyComponentWithLazyLoading = (WrappedComponent, entityName, asyncAction) => {
//     function LazyComponent(props) {
//         // const [isVisible, setIsVisible] = useState(false);
//         // const [data, setData] = useState(null);
//         // const [loading, setLoading] = useState(false);
//         // const [error, setError] = useState(null);
//         const containerRef = useRef(null);
//         const dispatch = useDispatch();

//         const entityValue = props[entityName];
//         const {id, ...queryVariables} = entityValue
//         if (!entityValue) {
//             throw Error("Component miss props key: " + entityName)
//         }

//         const [_state, _setState] = useState({
//             visible: false,
//             errors: null,
//             loading: false,
//             done: false
//         })

//         const items = useSelector(state => state["items"])
//         if (!items) {
//             throw Error("bad use of store and useFreshItem hook, checks that store state has items attribute")
//         }
//         const storedItem = items[entityValue?.id]

//         // Intersection Observer to track visibility
//         useEffect(() => {
//             if (!_state.visible) {
//                 const observer = new IntersectionObserver(
//                     ([entry]) => {
//                         if (entry.isIntersecting) {
//                             _setState({..._state, visible: true});
//                             observer.disconnect();
//                         }
//                     },
//                     { threshold: 0.1 }
//                 );
    
//                 if (containerRef.current) {
//                     observer.observe(containerRef.current);
//                 }
    
//                 return () => observer.disconnect();
//             }
//         }, [_state]);

//         // Fetch data when the component becomes visible
//         useEffect(() => {
//             if (_state.visible && !_state.loading && !_state.done) {
//                 const fetcher = async () => {
//                     let dispatchResult = null
//                     try {
//                         dispatchResult = await dispatch(asyncAction({id, ...queryVariables}), null)
//                         const {errors} = dispatchResult
//                         // console.log(`finished load ${id}`, dispatchResult)
//                         _setState({..._state, loading: false, done: true, errors: errors});   
                        
//                     }
//                     catch (errors) {
//                         console.log(`finished load errors ${id}`, dispatchResult)
//                         _setState({..._state, loading: false, done: true, errors: errors});   
                        
//                     }
//                     return dispatchResult                    
//                 }
//                 fetcher()
//                 _setState({..._state, loading: true});
//                 // console.log(`going to load ${id}`)
//             }
//         }, [_state, id, dispatch]);

//         // console.log(`1. state ${id}`, _state)
//         // console.log(`from store ${id}`, storedItem)
//         // Render when not visible
//         if (!_state.visible) {
//             return <div ref={containerRef} style={{ height: "100vh" }} />;
//         }
//         // console.log(`2. state ${id}`, _state)
//         // Render loading state
//         if (_state.loading) {
//             return (
//                 <div
//                     ref={containerRef}
//                     style={{
//                         height: "100vh",
//                         borderColor: "#2196F3",
//                         borderLeft: "6px solid #ccc",
//                     }}
//                 >
//                     Nahrávám...
//                 </div>
//             );
//         }
//         // console.log(`3. state ${id}`, _state)
//         // Render error state
//         if (_state.errors) {
//             return (
//                 <div ref={containerRef}>
//                     <h2>Error</h2>
//                     <p>{JSON.stringify(_state.errors, null, 4)}</p>
//                 </div>
//             );
//         }
//         // console.log(`4. state ${id}`, _state)
//         // Render the wrapped component with fetched data
//         if (_state.done) {
//             const wrappedProps = {
//                 ...props,
//                 [entityName]: storedItem,
//             };

//             return (
//                 <div ref={containerRef}>
//                     <WrappedComponent {...wrappedProps} />
//                 </div>
//             );
//         }
//         // console.log(`5. state ${id}`, _state)
//         // Render fallback for unexpected states
//         return (
//             <div ref={containerRef}>
//                 <h2>Unexpected Error</h2>
//                 <p>"Unknown issue occurred."</p>
//             </div>
//         );
        
//     }

//     LazyComponent.displayName = `Lazy${entityName}ComponentWithLazyDataFetching`;
//     return LazyComponent;
// };

const UserEventsCard2 = ({user}) => {
    const events = user?.events || []
    return <EventsCalendar events={events} />
}



const UserLazyEventCard = createDefferedComponentWithLazyLoading(UserEventsCard2, "user", UserEventsAsyncActionRead)
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
        {/* <UserEventsCard user={user} />
         */}
         {/* <div style={{height: "100vh", borderColor: "#2196F3", borderLeft: "6px solid #ccc" }}>
            <UserLazyEventCard user={user} />
         </div>
        
         <div style={{height: "100vh", borderColor: "#2196F3", borderLeft: "6px solid #ccc" }}>
            <UserLazyEventCard user={user} />
         </div>
         <div style={{height: "100vh", borderColor: "#2196F3", borderLeft: "6px solid #ccc" }}>
            <UserLazyEventCard user={user} />
         </div> */}

        <UserLazyEventCard user={user} />
        <UserLazyEventCard user={user} />
        <UserLazyEventCard user={user} />
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
const UserPageContentLazy = createDefferedComponentWithLazyLoading(UserPageContent, "user", UserAsyncActionRead);

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
