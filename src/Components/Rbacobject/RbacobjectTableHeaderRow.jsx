
import { RbacobjectTableDefinition as TableDefinition} from './RbacobjectTableDefinition';

export const RbacobjectTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

