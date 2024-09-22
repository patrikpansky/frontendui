import { useDispatch } from "react-redux"
import { CreateAsyncActionFromQuery } from "../Queries"
import { useEffect, useState } from "react"

const MeQuery = `{
    result: me {
      __typename
      isThisMe
      id
      name
      surname
      fullname
      email
      roles {
        group {
          id
          name
        }
        roletype {
          id
          name
        }
      }
    }
  }`

const MeAsyncAction = CreateAsyncActionFromQuery(MeQuery)

export const LogButton = ({loginURL='/oauth/login2?redirect_uri=/', logoutURL='/oauth/logout', showmeURL='/ug/user/view/'}) => {
    const dispatch = useDispatch()
    const [me, setMe] = useState(null)
    useEffect(() => {
        // if (me) {
        //     return
        // }
        const fetchMe = async () => {
            const jsondata = await dispatch(MeAsyncAction({}))
            const meFresh = jsondata?.data?.result
            if (meFresh) {
                setMe(meFresh)
            }
        }
        fetchMe()
    }, [dispatch, setMe])
    if (me) {
        return (   
            <div className="navbar-nav text-end m-0 p-0">
                <a className="nav-link" href={logoutURL}>{me?.fullname}</a>
                {showmeURL?<a className="nav-link" href={showmeURL+me?.id}><i className="bi bi-arrow-down-left-square" />Já</a>:null}
            </div>
        )
    } else {
        return (
            <div className="navbar-nav text-end m-0 p-0">
                <a className="nav-link" href={loginURL}>Login</a>
            </div>
        )
    }
}