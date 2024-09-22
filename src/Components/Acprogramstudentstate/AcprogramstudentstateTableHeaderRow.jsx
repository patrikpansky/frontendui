
import { AcprogramstudentstateTableDefinition as TableDefinition} from './AcprogramstudentstateTableDefinition';

export const AcprogramstudentstateTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

