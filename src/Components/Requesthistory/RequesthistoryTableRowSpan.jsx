
import { RequesthistoryTableDefinition as TableDefinition} from './RequesthistoryTableDefinition';
import { RequesthistoryLink as Link} from './RequesthistoryLink';

export const RequesthistoryTableRowSpan = ({ requesthistory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

