
import { MilestoneTableDefinition as TableDefinition} from './MilestoneTableDefinition';
import { MilestoneLink as Link} from './MilestoneLink';

export const MilestoneTableRowSpan = ({ milestone, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

