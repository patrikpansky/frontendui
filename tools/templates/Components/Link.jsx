import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/{{name name}}/view/";
export const setLinkBase = (value) => linkBase = value;
export const {{Name name}}Link = ({ {{name name}}, children}) => {
    // console.log("{{Name name}}LargeCard", {{name name}})
    return (
        <ProxyLink to={linkBase + {{name name}}?.id}>{ {{name name}}?.fullname || {{name name}}?.name || {{name name}}?.id}</ProxyLink>
    )
}

