
import { PlannedlessonTableDefinition as TableDefinition} from './PlannedlessonTableDefinition';
import { PlannedlessonLink as Link} from './PlannedlessonLink';

export const PlannedlessonTableRowSpan = ({ plannedlesson, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

