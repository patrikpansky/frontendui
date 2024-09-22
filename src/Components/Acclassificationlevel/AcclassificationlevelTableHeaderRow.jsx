
import { AcclassificationlevelTableDefinition as TableDefinition} from './AcclassificationlevelTableDefinition';

export const AcclassificationlevelTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

