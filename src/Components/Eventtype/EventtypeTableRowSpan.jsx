
import { EventtypeTableDefinition as TableDefinition} from './EventtypeTableDefinition';
import { EventtypeLink as Link} from './EventtypeLink';

export const EventtypeTableRowSpan = ({ eventtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

