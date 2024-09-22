
import { EventtypeTableDefinition as TableDefinition} from './EventtypeTableDefinition';
import { EventtypeLink as Link} from './EventtypeLink';

export const EventtypeTableRow = ({ eventtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ eventtype.id + name }><Link eventtype={ eventtype } /></td>:
                    <td key={ eventtype.id + name}>{ eventtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

