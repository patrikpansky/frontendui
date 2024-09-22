
import { PublicationTableDefinition as TableDefinition} from './PublicationTableDefinition';
import { PublicationLink as Link} from './PublicationLink';

export const PublicationTableRowSpan = ({ publication, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

