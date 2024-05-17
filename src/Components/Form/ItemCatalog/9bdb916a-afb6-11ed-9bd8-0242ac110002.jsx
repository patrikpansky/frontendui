import { useFreshItem } from '@hrbolek/uoisfrontend-shared/src'
import { UserAsyncActions } from '../../../Queries/_users'
import { UserMediumCard } from '../../User'

export const StudentItem = ({item}) => {
    const [student, promise] = useFreshItem({id: item?.value}, UserAsyncActions.read)
    if (student) {
        return (
            <UserMediumCard user={student} />
        )
    } else {
        return (
            <>Nahrávám studenta</>
        )
    }
}