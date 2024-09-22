
import { EventTableDefinition as TableDefinition} from './EventTableDefinition';
import { EventLink as Link} from './EventLink';

export const EventTableRowSpan = ({ event, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

