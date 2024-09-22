import {
    createBrowserRouter,
    RouterProvider,
    // useRouteError,
  } from "react-router-dom";

{{#each fields }}
//  {{Name name}}: {{returnType.name}}
{{/each}}   
  

{{#each fields }}
import { {{Name name}}Page } from "./Pages/{{Name name}}/{{Name name}}Page";
import { {{Name name}}EditPage } from "./Pages/{{Name name}}/{{Name name}}EditPage";
{{/each}}   

{{#each fields }}
import {
  {{#each returnType.fields}}
  {{#if isVector}}
  {{Name ../name}}{{Name name}}CardPage,
  {{/if}}  
  {{/each}}
} from "./Pages/{{Name name}}/{{Name name}}CardPages";
{{/each}}   


export const Routes = [
  {{#each fields }}

  { "path": "/all/{{name name}}/view/:id", "element": <{{Name name}}Page /> },
  { "path": "/all/{{name name}}/edit/:id", "element": <{{Name name}}EditPage /> },
  {{#each returnType.fields}}
  {{#if isVector}}
  { "path": "/all/{{name ../name}}/{{name name}}/:id", "element": <{{Name ../name}}{{Name name}}CardPage /> },
  {{/if}}    
  {{/each}}   
  {{/each}}   
]
  
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = ({children}) => <RouterProvider router={router} >{children}</RouterProvider>