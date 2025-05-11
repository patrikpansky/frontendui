import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
import { GroupRouterSegment as GroupRouterSegmentUG2, UserRouterSegment as UserRouterSegmentUG2 } from "@hrbolek/uoisfrontend-ug2";
import { SchemaRouterSegment } from "@hrbolek/uoisfrontend-all";
import { UserRouterSegments } from "@hrbolek/uoisfrontend-all";
import { SchemaTypeRouterSegment } from "../../../packages/all/src/SchemaType/Pages/SchemaTypeRouterSegment";
import { GroupRouterSegments } from "../../../packages/all/src/GroupGQLModel";
  
const Routes = [
    UserRouterSegmentUG2,
    GroupRouterSegmentUG2,
    SchemaRouterSegment,
    SchemaTypeRouterSegment,

    ...UserRouterSegments,
    ...GroupRouterSegments
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

