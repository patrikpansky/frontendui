
import { PublicationauthorTableDefinition as TableDefinition} from './PublicationauthorTableDefinition';
import { PublicationauthorLink as Link} from './PublicationauthorLink';

export const PublicationauthorTableRowSpan = ({ publicationauthor, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

