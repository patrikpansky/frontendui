
import { AcprogrammessageTableDefinition as TableDefinition} from './AcprogrammessageTableDefinition';

export const AcprogrammessageTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

