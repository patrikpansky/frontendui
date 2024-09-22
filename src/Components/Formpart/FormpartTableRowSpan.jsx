
import { FormpartTableDefinition as TableDefinition} from './FormpartTableDefinition';
import { FormpartLink as Link} from './FormpartLink';

export const FormpartTableRowSpan = ({ formpart, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

