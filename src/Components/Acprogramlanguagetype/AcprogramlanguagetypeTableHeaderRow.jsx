
import { AcprogramlanguagetypeTableDefinition as TableDefinition} from './AcprogramlanguagetypeTableDefinition';

export const AcprogramlanguagetypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

