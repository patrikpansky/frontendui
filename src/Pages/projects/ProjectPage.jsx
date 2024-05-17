// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { ProjectLargeCard } from "../../Components/Project/ProjectLargeCard"
import { ProjectsAsyncActions } from "../../Queries/_projects"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst projekt", success: "Načtení projektu se povedlo"})
export const ProjectPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [project, promise] = useFreshItem({id}, ProjectsAsyncActions.read)
    promise.then(onResolve, onReject)

    if (project) {
        return (
            <ProjectLargeCard project={project} />
        )
    } else {
        return (
            <div>Nahrávám projekt...</div>
        )
    }
    
}