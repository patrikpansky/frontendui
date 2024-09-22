
import { FacilitytypeTableDefinition as TableDefinition} from './FacilitytypeTableDefinition';

export const FacilitytypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

