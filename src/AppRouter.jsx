import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";

import { GroupSubgroupsPage } from "./Pages/ug/GroupSubgroupsPage";
import { GroupSubgroupsEditPage } from "./Pages/ug/GroupSubgroupsEditPage";
import { GlobalSearchPage } from "./Pages/GlobalSearchPage";
import { GroupMembersEditPage } from "./Pages/ug/GroupMembersEditPage";
import { PlanEditPage } from "./Pages/PlanEditPage";
import { EventPage } from "./Pages/events/EventPage";
import { PublicationPage } from "./Pages/publications/PublicationPage";
import { SurveyPage } from "./Pages/surveys/SurveyPage";
import { FormPage } from "./Pages/forms/FormPage";
import { ProjectPage } from "./Pages/projects/ProjectPage";
import { FacilityPage } from "./Pages/facilities/FacilityPage";
import { ProgramPage } from "./Pages/programs/ProgramPage";
import { ProgramSubjectsPage } from "./Pages/programs/ProgramSubjectsPage";
import { SubjectPage } from "./Pages/programs/SubjectPage";
import { SubjectSemesterPage } from "./Pages/programs/SubjectSemesterPage";
import { SemesterPage } from "./Pages/programs/SemesterPage";
import { RequestPage } from "./Pages/requests/RequestPage";
import { GroupSubDepartmentsPage } from "./Pages/ug/GroupSubDepartmentsPage";
import { GroupSubFacultiesPage } from "./Pages/ug/GroupSubFacultiesPage";
import { GroupAnalysisPage } from "./Pages/ug/GroupAnalysisPage";
import { RequestEditPage } from "./Pages/requests/RequestEditPage";
import { GroupEventsPage } from "./Pages/ug/GroupEventsPage";
import { EventsPage } from "./Pages/events/EventsPage";
import { UsersPage } from "./Pages/users/UsersPage";
import { GroupsPage } from "./Pages/groups/GroupsPage";
import { GroupPage } from "./Pages/groups/GroupPage";

// import { UserPage, GroupPage } from "./Pages";
const prefix = "/ug"
export const Routes = [
    // {
    //     path: "*",
    //     element: <SearchPage />,
    //     errorElement: <SearchPage />
    // },
    {
        path: "/events/:startdate",
        element: <EventsPage />,
    },
    {
        path: "/events",
        element: <EventsPage />,
    },
    {
        path: "/events/event/view/:id",
        element: <EventPage />,
    },
    {
        path: "/publications/publication/view/:id",
        element: <PublicationPage />,
    },
    {
        path: "/surveys/survey/view/:id",
        element: <SurveyPage />,
    },
    {
        path: "/forms/form/view/:id",
        element: <FormPage />,
    },
    {
        path: "/forms/request/view/:id",
        element: <RequestPage />,
    },
    {
        path: "/forms/request/edit/:id",
        element: <RequestEditPage />,
    },
    {
        path: "/projects/project/view/:id",
        element: <ProjectPage />,
    },
    {
        path: "/programs/program/view/:id",
        element: <ProgramPage />,
    },
    {
        path: "/programs/subjects/view/:id",
        element: <ProgramSubjectsPage />,
    },
    {
        path: "/programs/subject/view/:id",
        element: <SubjectPage />,
    },
    {
        path: "/programs/semesters/view/:id",
        element: <SubjectSemesterPage />,
    },
    {
        path: "/programs/semester/view/:id",
        element: <SemesterPage />,
    },
    {
        path: "/facilities/facility/view/:id",
        element: <FacilityPage />,
    },
    {
        path: "/plans/plan/edit/:id",
        element: <PlanEditPage />,
    },
    {
        path: prefix + "/users",
        element: <UsersPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/user/view/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/user/edit/:id",
        element: <UserEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/userroles/edit/:id",
        element: <UserRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/groups",
        element: <GroupsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/view/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/events/:id",
        element: <GroupEventsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/groupmembers/edit/:id",
        element: <GroupMembersEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/subgroups/view/:id",
        element: <GroupSubgroupsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/subgroups/edit/:id",
        element: <GroupSubgroupsEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/departments/:id",
        element: <GroupSubDepartmentsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/faculties/:id",
        element: <GroupSubFacultiesPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/groupanalysis/:code/:id",
        element: <GroupAnalysisPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/edit/:id",
        element: <GroupEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/grouproles/edit/:id",
        element: <GroupRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/search/:phrase",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix,
        element: <GlobalSearchPage />
    },
    {
        path: "*",
        element: <GlobalSearchPage />
    }
]


// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />