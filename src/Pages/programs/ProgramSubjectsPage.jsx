// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { ProgramLargeCard } from "../../Components/Program/ProgramLargeCard"
import { ProgramSubjectsCard } from "../../Components/Program/ProgramSubjectsCard"
import { ProgramsAsyncActions } from "../../Queries/_programs"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst program", success: "Načtení programu se povedlo"})
export const ProgramSubjectsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [program, promise] = useFreshItem({id}, ProgramsAsyncActions.read)
    promise.then(onResolve, onReject)

    if (program) {
        return (
            <ProgramLargeCard program={program}>
                <ProgramSubjectsCard program={program} />
            </ProgramLargeCard>
        )
    } else {
        return (
            <div>Nahrávám program...</div>
        )
    }
    
}