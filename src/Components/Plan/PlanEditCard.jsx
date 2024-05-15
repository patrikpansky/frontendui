import { CardCapsule} from '@hrbolek/uoisfrontend-shared/src'
import { PlanPivotEditableTable } from './PlanPivotEditableTable'

export const PlanEditCard = ({plan}) => {
    return (
        <CardCapsule title={"Plan"}>

            <PlanPivotEditableTable plan={plan}>
                
            </PlanPivotEditableTable>
        </CardCapsule>
    )
}