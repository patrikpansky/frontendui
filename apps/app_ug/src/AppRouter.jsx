import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
import { UserPage } from "@hrbolek/uoisfrontend-ug";
import { UserStudiesPage } from "@hrbolek/uoisfrontend-granting";
import { GroupPage } from "@hrbolek/uoisfrontend-ug";
import { AdmissionPage } from "../../../packages/admissions/src";
import { RequestsPage, RequestDesignPage, RequestPage, RequestCategoriesPage } from "../../../packages/requests/src";
import { RequestTypePage } from "../../../packages/requests/src/Pages/RequestTypePage";
import { RequestCategoryPage } from "../../../packages/requests/src/Pages/RequestCategoryPage";

const prefix = "/ug"
export const Routes = [
    {
        path: `/${prefix}/user/view/:id`,
        element: <UserPage />,
    },  
    {
      path: `/${prefix}/group/view/:id`,
      element: <GroupPage />,
    },  
    {
        path: `/admissions/admission/view/:id`,
        element: <AdmissionPage />
    },  
    {
        path: `/studies/user/view/:id`,
        element: <UserStudiesPage />
    },
    {
        path: `/requests/request/view/:id`,
        element: <RequestPage />
    },
    {
        path: `/requests/request/design/:id`,
        element: <RequestDesignPage />
    },
    {
        path: `/requests/category/view/:id`,
        element: <RequestCategoryPage />
    },
    {
        path: `/requests/categories/view`,
        element: <RequestCategoriesPage />
    },
    {
        path: `/requests/type/view/:id`,
        element: <RequestTypePage />
    },
    {
        path: `/requests/all/view`,
        element: <RequestsPage />
    }
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

