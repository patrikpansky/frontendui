
import { PublicationtypeTableDefinition as TableDefinition} from './PublicationtypeTableDefinition';
import { PublicationtypeLink as Link} from './PublicationtypeLink';

export const PublicationtypeTableRowSpan = ({ publicationtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

