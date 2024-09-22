
import { GroupconnectionedgeTableDefinition as TableDefinition} from './GroupconnectionedgeTableDefinition';
import { GroupconnectionedgeLink as Link} from './GroupconnectionedgeLink';

export const GroupconnectionedgeTableRowSpan = ({ groupconnectionedge, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

