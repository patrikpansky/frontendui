
import { ExternalidtypeTableDefinition as TableDefinition} from './ExternalidtypeTableDefinition';
import { ExternalidtypeLink as Link} from './ExternalidtypeLink';

export const ExternalidtypeTableRowSpan = ({ externalidtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

