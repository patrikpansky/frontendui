
import { EventTableDefinition as TableDefinition} from './EventTableDefinition';
import { EventLink as Link} from './EventLink';

export const EventTableRow = ({ event, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ event.id + name }><Link event={ event } /></td>:
                    <td key={ event.id + name}>{ event[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

