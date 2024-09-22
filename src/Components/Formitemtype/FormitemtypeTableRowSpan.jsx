
import { FormitemtypeTableDefinition as TableDefinition} from './FormitemtypeTableDefinition';
import { FormitemtypeLink as Link} from './FormitemtypeLink';

export const FormitemtypeTableRowSpan = ({ formitemtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

