
import { StatetransitionTableDefinition as TableDefinition} from './StatetransitionTableDefinition';
import { StatetransitionLink as Link} from './StatetransitionLink';

export const StatetransitionTableRowSpan = ({ statetransition, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

