import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
