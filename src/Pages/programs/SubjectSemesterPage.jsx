// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SubjectLargeCard } from "../../Components/Program/SubjectLargeCard"
import { SubjectsAsyncActions } from "../../Queries/_subjects"
import { SubjectSemestersCard } from "../../Components/Program/SubjectSemestersCard"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subject", success: "Načtení subjectu se povedlo"})
export const SubjectSemesterPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [subject, promise] = useFreshItem({id}, SubjectsAsyncActions.read)
    promise.then(onResolve, onReject)

    if (subject) {
        return (
            <SubjectLargeCard subject={subject}>
                <SubjectSemestersCard subject={subject} />
            </SubjectLargeCard>
        )
    } else {
        return (
            <div>Nahrávám subject...</div>
        )
    }
    
}