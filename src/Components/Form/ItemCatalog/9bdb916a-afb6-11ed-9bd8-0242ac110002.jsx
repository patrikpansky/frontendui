import { useFreshItem } from '@hrbolek/uoisfrontend-shared/src'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { UserAsyncActions } from '../../../Queries/_users'
import { UserMediumBody } from '../../User'

export const StudentItem = ({item}) => {
    const [student, promise] = useFreshItem({id: item?.value}, UserAsyncActions.read)
    if (student) {
        return (
            <CardCapsule title={item?.name}>
                <UserMediumBody user={student} />
            </CardCapsule>
        )
    } else {
        return (
            <>Nahrávám studenta</>
        )
    }
}