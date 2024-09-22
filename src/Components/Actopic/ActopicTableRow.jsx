
import { ActopicTableDefinition as TableDefinition} from './ActopicTableDefinition';
import { ActopicLink as Link} from './ActopicLink';

export const ActopicTableRow = ({ actopic, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ actopic.id + name }><Link actopic={ actopic } /></td>:
                    <td key={ actopic.id + name}>{ actopic[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

