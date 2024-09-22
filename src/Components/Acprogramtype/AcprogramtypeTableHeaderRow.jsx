
import { AcprogramtypeTableDefinition as TableDefinition} from './AcprogramtypeTableDefinition';

export const AcprogramtypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

