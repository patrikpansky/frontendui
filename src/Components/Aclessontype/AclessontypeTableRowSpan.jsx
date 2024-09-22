
import { AclessontypeTableDefinition as TableDefinition} from './AclessontypeTableDefinition';
import { AclessontypeLink as Link} from './AclessontypeLink';

export const AclessontypeTableRowSpan = ({ aclessontype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

