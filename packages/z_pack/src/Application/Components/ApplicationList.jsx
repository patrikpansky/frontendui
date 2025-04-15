import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ProgramLink } from "../../Program"
import { LoadingSpinner, ErrorHandler } from "@hrbolek/uoisfrontend-shared"

export const ApplicationList = ({ program }) => {
    const { data, loading, error } = useAsyncAction(
        ApplicationListAsyncAction,
        { programId: program.id }
    )

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler error={error} />
    
    return (
        <div className="application-list">
            <h3>Applications for <ProgramLink program={program} /></h3>
            <div className="application-statuses">
                {data?.applications.map(app => (
                    <ApplicationStatus key={app.id} application={app} />
                ))}
            </div>
        </div>
    )
}