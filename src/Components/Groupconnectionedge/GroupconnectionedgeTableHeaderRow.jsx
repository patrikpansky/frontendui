
import { GroupconnectionedgeTableDefinition as TableDefinition} from './GroupconnectionedgeTableDefinition';

export const GroupconnectionedgeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

