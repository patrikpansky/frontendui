import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";
import { ArrowsAngleExpand } from "react-bootstrap-icons";
export const GroupLinkDepartments = ({group}) => 
    <ProxyLink to={"/ug/group/departments/" + group.id}>
        <ArrowsAngleExpand />ds
    </ProxyLink>
    