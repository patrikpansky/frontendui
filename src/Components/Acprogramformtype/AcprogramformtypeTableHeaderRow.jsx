
import { AcprogramformtypeTableDefinition as TableDefinition} from './AcprogramformtypeTableDefinition';

export const AcprogramformtypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

