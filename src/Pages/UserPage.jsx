// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserByIdAsyncAction } from "../Queries"
import UserAsyncActions from '../Queries/_users'

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const UserPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    // const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    const [user, userPromise] = useFreshItem({id}, UserAsyncActions.read)
    userPromise.then(onResolve, onReject)

    if (user) {
        return (
            <UserLargeCard user={user} />
        )
    } else {
        return (
            <div>Nahrávám uživatele...</div>
        )
    }
    
}