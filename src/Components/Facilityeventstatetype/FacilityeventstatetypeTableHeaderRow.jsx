
import { FacilityeventstatetypeTableDefinition as TableDefinition} from './FacilityeventstatetypeTableDefinition';

export const FacilityeventstatetypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

