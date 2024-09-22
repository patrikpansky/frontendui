
import { AcprogramleveltypeTableDefinition as TableDefinition} from './AcprogramleveltypeTableDefinition';

export const AcprogramleveltypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

