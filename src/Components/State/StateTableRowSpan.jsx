
import { StateTableDefinition as TableDefinition} from './StateTableDefinition';
import { StateLink as Link} from './StateLink';

export const StateTableRowSpan = ({ state, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

