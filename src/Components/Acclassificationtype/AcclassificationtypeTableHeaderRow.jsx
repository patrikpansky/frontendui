
import { AcclassificationtypeTableDefinition as TableDefinition} from './AcclassificationtypeTableDefinition';

export const AcclassificationtypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

