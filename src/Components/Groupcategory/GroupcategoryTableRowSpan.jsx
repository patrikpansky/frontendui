
import { GroupcategoryTableDefinition as TableDefinition} from './GroupcategoryTableDefinition';
import { GroupcategoryLink as Link} from './GroupcategoryLink';

export const GroupcategoryTableRowSpan = ({ groupcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

