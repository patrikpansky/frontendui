import {
      createBrowserRouter,
      RouterProvider,
      Outlet
} from "react-router-dom";

import { AdmissionPage, ExamPage, StudentPage } from "@hrbolek/uoisfrontend-admissions";
import { ReadOnlyProvider } from '@hrbolek/uoisfrontend-shared';

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
                path: '/admission/admission/editable/:id',
                element: <AdmissionPage />
            },
            {
                path: '/admission/admission/readonly/:id',
                element: <AdmissionPage />
            },
            {
                path: '/admission/student/view/:id',
                element: <StudentPage />
            },
            {
                path: '/admission/exam/view/:id',
                element: <ExamPage />
            },
        ]
    }
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

