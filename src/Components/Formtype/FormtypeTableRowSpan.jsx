
import { FormtypeTableDefinition as TableDefinition} from './FormtypeTableDefinition';
import { FormtypeLink as Link} from './FormtypeLink';

export const FormtypeTableRowSpan = ({ formtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

