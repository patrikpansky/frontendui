// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FacilityLargeCard } from "../../Components/Facility/FacilityLargeCard"
import { FacilitiesAsyncActions } from "../../Queries/_facilities"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst objeke", success: "Načtení objektu se povedlo"})
export const FacilityPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [facility, promise] = useFreshItem({id}, FacilitiesAsyncActions.read)
    promise.then(onResolve, onReject)

    if (facility) {
        return (
            <FacilityLargeCard facility={facility} />
        )
    } else {
        return (
            <div>Nahrávám objekt...</div>
        )
    }
    
}