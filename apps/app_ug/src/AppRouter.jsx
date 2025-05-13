import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
import { GroupRouterSegment as GroupRouterSegmentUG2, UserRouterSegment as UserRouterSegmentUG2 } from "@hrbolek/uoisfrontend-ug2";
import { SchemaRouterSegment } from "@hrbolek/uoisfrontend-all";
import { UserRouterSegments } from "@hrbolek/uoisfrontend-all";
import { SchemaTypeRouterSegment } from "../../../packages/all/src/SchemaType/Pages/SchemaTypeRouterSegment";
import { GroupRouterSegments } from "../../../packages/all/src/GroupGQLModel";
import { ProgramRouterSegments } from "../../../packages/all/src/ProgramGQLModel";
import { SubjectRouterSegments } from "../../../packages/all/src/SubjectGQLModel";
  
const Routes = [
    UserRouterSegmentUG2,
    GroupRouterSegmentUG2,
    SchemaRouterSegment,
    SchemaTypeRouterSegment,

    ...UserRouterSegments,
    ...GroupRouterSegments,
    ...ProgramRouterSegments,
    ...SubjectRouterSegments
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

