// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SemesterLargeCard } from "../../Components/Program/SemesterLargeCard"
import { SemestersAsyncActions } from "../../Queries/_semesters"
import { SemesterTopicsCard } from "../../Components/Program/SemesterTopicsCard"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst semester", success: "Načtení semestru se povedlo"})
export const SemesterPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [semester, promise] = useFreshItem({id}, SemestersAsyncActions.read)
    promise.then(onResolve, onReject)

    if (semester) {
        return (
            <SemesterLargeCard semester={semester}>
                <SemesterTopicsCard semester={semester} />
            </SemesterLargeCard>
        )
    } else {
        return (
            <div>Nahrávám semester...</div>
        )
    }
    
}