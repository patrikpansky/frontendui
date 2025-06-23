//import { ProgramPage, ProgramRouterSegment, SubjectRouterSegment, AddmissionRouterSegment } from "@hrbolek/uoisfrontend-zp";
import {
      createBrowserRouter,
      RouterProvider,
      Link
} from "react-router-dom";
import { ProgramRouterSegment, AdmissionRouterSegment, UserRouterSegment } from "../../../packages/z_pack/src";
import { UserPage } from "../../../packages/z_pack/src";
import { AdmissionPage } from "../../../packages/z_pack/src";
import { ProgramListPage } from "../../../packages/z_pack/src";

// import { UserRouterSegment } from "@hrbolek/uoisfrontend-ug2";

export const Routes = [
    {
        // http://localhost:5173/user/6a6ca6e9-2222-498f-b270-b7b07c2afa41
        path: "/pataszdenda/user/view/:id",
        element: <UserPage/>
    },
    {
        path: "/admissionlistview/programs/view",
        element: <ProgramListPage/>
    },
    ProgramRouterSegment,
    AdmissionRouterSegment,
    UserRouterSegment,
    ProgramListPage,
    
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />
