// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { GroupLargeCard } from "../../Components/Group/GroupLargeCard"
import { GroupAsyncActions } from "../../Queries/_groups"
import { GroupEventsCard } from "../../Components/Group/GroupEventsCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst skupinu", success: "Načtení skupiny se povedlo"})
export const GroupEventsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [group, groupPromise] = useFreshItem({id}, GroupAsyncActions.read)
    groupPromise.then(onResolve, onReject)
    
    // thenable je Promise, takze lze pouzit jeji metodu then; 
    // teto metode predame funkce pro zpracovani spravneho (uspesneho) a chyboveho cteni

    if (group) {
        return (
            <GroupLargeCard group={group}>
                <GroupEventsCard group={group} />
            </GroupLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}