
import { FormitemTableDefinition as TableDefinition} from './FormitemTableDefinition';
import { FormitemLink as Link} from './FormitemLink';

export const FormitemTableRowSpan = ({ formitem, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

