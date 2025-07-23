//import { ProgramPage, ProgramRouterSegment, SubjectRouterSegment, AddmissionRouterSegment } from "@hrbolek/uoisfrontend-zp";
import {
      createBrowserRouter,
      RouterProvider,
      Link,
      Outlet
} from "react-router-dom";
import { ProgramRouterSegment, ProgramReadOnlyRouterSegment, AdmissionRouterSegment, AdmissionReadOnlyRouterSegment, UserRouterSegment } from "../../../packages/z_pack/src";
import { UserPage } from "../../../packages/z_pack/src";
import { AdmissionPage } from "../../../packages/z_pack/src";
import { ProgramListPage } from "../../../packages/z_pack/src";
import { ReadOnlyProvider } from '@hrbolek/uoisfrontend-shared';

// import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";

// Root component to wrap everything with ReadOnlyProvider
const RootLayout = () => (
    <ReadOnlyProvider>
        <Outlet />
    </ReadOnlyProvider>
);

export const Routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                // http://localhost:5173/user/6a6ca6e9-2222-498f-b270-b7b07c2afa41
                path: "/pataszdenda/user/view/:id",
                element: <UserPage/>
            },
            {
                path: "/admissionlistview/programs/editable",
                element: <ProgramListPage/>
            },
            ProgramRouterSegment,
            ProgramReadOnlyRouterSegment,
            AdmissionRouterSegment,
            AdmissionReadOnlyRouterSegment,
            UserRouterSegment,
            ProgramListPage,
        ]
    }
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />
