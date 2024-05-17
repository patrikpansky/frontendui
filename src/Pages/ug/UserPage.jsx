// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { UserLargeCard } from "../../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { UserAsyncActions } from "../../Queries/_users"

// export const CreateAsyncQueryValidator2 = (reactions) => {
//     const [onResolve, onReject] = CreateAsyncQueryValidator(reactions)
//     return (actionwithvariables) => (dispatch /*, getState*/) => {
//         return actionwithvariables(dispatch).then(onResolve, onReject)
//     }
// }

export const CreateAsyncQueryValidator3 = (reactions) => {
    const validator = CreateAsyncQueryValidator(reactions)
    return (dispatch) => {
        const [onResolve, onReject] = validator(dispatch)
        return (dispatchedFetch) => {
            return dispatchedFetch.then(onResolve, onReject)
        }
    }
}

// const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
const validator3 = CreateAsyncQueryValidator3({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatele se povedlo"})
export const UserPage = ()  => {
    const {id} = useParams()
    // const [onResolve, onReject] = validator(useDispatch())
    // const [user, userPromise] = useFreshItem({id}, FetchUserByIdAsyncAction)
    const [user, userPromise] = useFreshItem({id}, UserAsyncActions.read)
    // userPromise.then(onResolve, onReject)
    validator3(useDispatch())(userPromise)

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