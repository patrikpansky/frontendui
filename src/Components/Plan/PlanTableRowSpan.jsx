
import { PlanTableDefinition as TableDefinition} from './PlanTableDefinition';
import { PlanLink as Link} from './PlanLink';

export const PlanTableRowSpan = ({ plan, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

