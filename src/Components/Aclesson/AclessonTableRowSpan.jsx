
import { AclessonTableDefinition as TableDefinition} from './AclessonTableDefinition';
import { AclessonLink as Link} from './AclessonLink';

export const AclessonTableRowSpan = ({ aclesson, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

