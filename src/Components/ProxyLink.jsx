import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const ProxyLink = ({to, children, ...others}) => {
    const {pathname} = useResolvedPath(to)
    const base = pathname.split('/')[1]
    // const item = useMatch(pathname)

    const isLocal = window.location.pathname.startsWith( "/" + base)

    // const item2 = useMatch(to)
    // console.log(to, item2)
    // console.log(pathname, item, item2)
    // console.log(to, pathname, isLocal)
    if (isLocal) {
        return <Link to={to} {...others}>{children}</Link>
    } else {
        return <Link to={to} {...others} reloadDocument={true}>{children}</Link>
    }
    
}