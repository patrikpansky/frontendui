
import { PlannedlessonTableDefinition as TableDefinition} from './PlannedlessonTableDefinition';

export const PlannedlessonTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

