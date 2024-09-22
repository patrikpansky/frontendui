
import { FormTableDefinition as TableDefinition} from './FormTableDefinition';
import { FormLink as Link} from './FormLink';

export const FormTableRowSpan = ({ form, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

