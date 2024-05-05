/* eslint-disable react/prop-types */
import { Dropdown } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export const ProxyLink = ({to, children, ...others}) => {
    const {pathname} = useResolvedPath(to)
    const item = useMatch(pathname)
    // const item2 = useMatch(to)
    // console.log(to, item2)
    // console.log(pathname, item, item2)
    if (item) {
        return <Link to={to} {...others}>{children}</Link>
    } else {
        return <Link to={to} {...others} reloadDocument={true}>{children}</Link>
    }
    
}


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
                    <Dropdown.Item ><Link to={"/user/view/" + user?.id} >Zobrazit</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/user/edit/" + user?.id} >Editovat</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to={"/userroles/edit/" + user?.id} >Editovat role</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>                
            

            )
    } else {
        return (
            <UserLink_ user={user}>{children}</UserLink_>
        )
    }
}
