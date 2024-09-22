
import { RequestTableDefinition as TableDefinition} from './RequestTableDefinition';
import { RequestLink as Link} from './RequestLink';

export const RequestTableRow = ({ request, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ request.id + name }><Link request={ request } /></td>:
                    <td key={ request.id + name}>{ request[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

