
import { AcprogramstudentTableDefinition as TableDefinition} from './AcprogramstudentTableDefinition';

export const AcprogramstudentTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

