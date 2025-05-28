import { ProgramReadPageAsyncAction } from '../../Program/Queries/ProgramReadPageAsyncAction';
import { UserProgramsAttribute } from '../../User/Vectors/UserProgramsAttribute';
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';

export const DisplayPrograms = () => {

    const {loading, dispatchResult} = useAsyncAction(ProgramReadPageAsyncAction, {limit: 100, skip: 0})
    
    if (loading) {
        return <div>Loading...</div>
    }
    if (!dispatchResult) {
        return <div>No data</div>
    }

   return (
    <div>
        <UserProgramsAttribute programPage={dispatchResult.data.result}/>
        
    </div>
)
}