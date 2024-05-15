import { 
    SelectInput
} from '@hrbolek/uoisfrontend-shared/src'
import { FetchLessonTypesAsyncAction } from '../../Queries/FetchLessonTypesAsyncAction'


export const LessonTypeSelect = ({lesson, onChange}) => {
    const onChange_ = (roletype_id) => {
        onChange({...lesson, roletype_id})
    }
    const data = {...lesson, roletype_id: lesson?.type?.id}
    return (
        <SelectInput FetchAsyncAction={FetchLessonTypesAsyncAction} id="select" value={data.roletype_id} onChange={onChange_} />
    )
}