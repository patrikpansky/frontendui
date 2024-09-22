
import { FormitemcategoryTableDefinition as TableDefinition} from './FormitemcategoryTableDefinition';
import { FormitemcategoryLink as Link} from './FormitemcategoryLink';

export const FormitemcategoryTableRowSpan = ({ formitemcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

