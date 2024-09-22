
import { FormcategoryTableDefinition as TableDefinition} from './FormcategoryTableDefinition';
import { FormcategoryLink as Link} from './FormcategoryLink';

export const FormcategoryTableRowSpan = ({ formcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

