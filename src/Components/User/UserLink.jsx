/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { ProxyLink } from "../ProxyLinnk";
// import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";
// import { Link as ProxyLink } from "react-router-dom";
export const UserLink_ = ({user, children}) => {
    return (
        <ProxyLink to={"/ug/user/view/" + user?.id}>{children?children:user?.fullname}</ProxyLink>
    )
}

const UserMenuItems = {
    "Editovat": "local:/user/view",
    "Zobrazit": "local:/user/edit",

}

export const UserLink = ({user, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <UserLink_ user={user}>
                    {children}
                </UserLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                {/* ⋮ */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><ProxyLink to={"/ug/user/view/" + user?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item ><ProxyLink to={"/ug/user/edit/" + user?.id} >Editovat</ProxyLink></Dropdown.Item>
                    <Dropdown.Item ><ProxyLink to={"/ug/userroles/edit/" + user?.id} >Editovat role</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <UserLink_ user={user}>{children}</UserLink_>
        )
    }
}
