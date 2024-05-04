import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";

// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    // {
    //     path: "*",
    //     element: <SearchPage />,
    //     errorElement: <SearchPage />
    // },
    {
        path: "/user/view/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/view/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/edit/:id",
        element: <EventEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/user/edit/:id",
        element: <UserEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/userroles/edit/:id",
        element: <UserRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/view/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/edit/:id",
        element: <GroupEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/grouproles/edit/:id",
        element: <GroupRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]


const createProxyBrowseRouter = (Routes, options={}) => {
    const {basename} = options
    const CatchAllElement = () => {
        const error = useRouteError();
        const {status, data } = error
        //if (error)
        // const navigate = useNavigate()
        if (status === 404) {
            if (data?.startsWith(basename)) {
                ;
            } else {
                if (window) {
                    const segments = data.split('"')
                    const csegments = window.location.pathname.split('/')
                    const newLocation = window.location.protocol + "//" + window.location.hostname + ":"  + window.location.port + segments[1]
                    // console.log(newLocation)
                    // console.log("items", Object.keys(items).length, items)
                    // window.location = newLocation
                    // if (Object.keys(items).length > 1) {
                    // console.log(basename, window.location.pathname)
                    // console.log(basename, segments[1], csegments[1])
                    if (!segments[1].startsWith('/' + csegments[1])) {
                        // console.log("items", items)
                        window.location = newLocation
                    } else {
                        // console.log(newLocation)
                    }
                    
                }
            }
        }
        return (
            <div>
                < hr/>
                nastala chyba - odkaz {error.data.split('"')[1]} se nepodařilo nalézt 
                < hr/>
                <code>
                    {JSON.stringify(error)}
                </code>
            </div>
        )
    }

    const catchAllElement = <CatchAllElement />

    if (basename) {
        const mappedRoutes = Routes.map(route => ({...route, path: basename + route.path }))
        if (catchAllElement) {
            mappedRoutes.push({path: basename + "/*", element: catchAllElement, errorElement: catchAllElement})
            // mappedRoutes.push({path: "/*", element: catchAllElement, errorElement: catchAllElement})
        }
        const master = {path: basename, children: mappedRoutes, errorElement: catchAllElement}
        // return createBrowserRouter(mappedRoutes)
        return createBrowserRouter([master])
    } else {
        const mappedRoutes = [...Routes]
        if (catchAllElement) {
            mappedRoutes.push({path: "*", element: catchAllElement, errorElement: catchAllElement})
        }
        return createBrowserRouter(mappedRoutes)
    }
}

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />