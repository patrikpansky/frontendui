import { CardCapsule, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { useEffect, useState } from "react"
import { ProjectsAsyncActions } from "../../Queries/_projects"

// 7221a0c7-479b-41fc-89ab-4a8319501eca
const filterValidProjectGroup = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid
    return (grouptypeid === "7221a0c7-479b-41fc-89ab-4a8319501eca") && valid
}



export const ExternalIds = ({}) => {
    const {id} = useParams()
    // const [onResolve, onReject] = validator(useDispatch())
    const [ids, setIds] = useState(null)
    const dispatch = useDispatch()
    useEffect( 
        () => {
            const asyncFetch = async () => {
                const jsonResult = await dispatch(ExternalidsAsyncActions.read({id}))
                const resultList = jsonResult?.data?.resultList
                if (resultList) {
                    setIds(resultList)
                }
            }
            asyncFetch()    
        },
        [dispatch, id]
    )
    if (ids) {
        if (ids.length > 0) {
            return (
                <CardCapsule title={"Externí ID"}>
                    {/* {JSON.stringify(ids)} */}
                    {ids.map(
                        id => (id?.link)?<Row key={id?.id} >
                                <Col>
                                    <a href={id?.link}>{id?.type?.name}</a>
                                </Col>
                            </Row>:""
                    )}
                </CardCapsule>
            )
        } else {
            return <></>
        }
        
    } else {
        return (
            <></>
        )
    }
    
}
const filterValidStudentGroup = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid || true
    return (grouptypeid === "7221a0c7-479b-41fc-89ab-4a8319501eca") && valid
    // return true
}
export const GroupProjects = ({group}) => {
    const subgroups = group?.subgroups || []
    const [projects, setProjects] = useState([])
    const dispatch = useDispatch()
    useEffect( 
        () => {
            const filteredSubgroups = subgroups?.filter(filterValidStudentGroup) || []
            const ids = filteredSubgroups.map(group => group?.id)
            const asyncFetch = async () => {
                const jsonResult = await dispatch(ProjectsAsyncActions.readbygroups({ids}))
                const result = jsonResult?.data?.result
                if (result) {
                    setProjects(result)
                }
            }
            asyncFetch()    
        },
        [dispatch, subgroups]
    )

    // const projectsGroups = group?.subgroups?.filter(filterValidStudentGroup) || []
    if (projects.length === 0) {
        return null
    } else {
        return (
            <CardCapsule title={"Projekty"}>
                {projects.map(
                    project => <div key={project?.id}><a href={"http://localhost:33001/projects/project/view/" + project?.id}>{project?.name}</a></div>
                )}
            </CardCapsule>
        )
    }   
}
