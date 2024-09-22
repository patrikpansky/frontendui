
import { UserconnectionedgeTableDefinition as TableDefinition} from './UserconnectionedgeTableDefinition';

export const UserconnectionedgeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

