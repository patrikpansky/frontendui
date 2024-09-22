
import { ExternalidTableDefinition as TableDefinition} from './ExternalidTableDefinition';
import { ExternalidLink as Link} from './ExternalidLink';

export const ExternalidTableRowSpan = ({ externalid, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

