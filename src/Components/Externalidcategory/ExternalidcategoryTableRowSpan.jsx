
import { ExternalidcategoryTableDefinition as TableDefinition} from './ExternalidcategoryTableDefinition';
import { ExternalidcategoryLink as Link} from './ExternalidcategoryLink';

export const ExternalidcategoryTableRowSpan = ({ externalidcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

