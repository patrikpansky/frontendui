
import { RequestTableDefinition as TableDefinition} from './RequestTableDefinition';
import { RequestLink as Link} from './RequestLink';

export const RequestTableRowSpan = ({ request, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

