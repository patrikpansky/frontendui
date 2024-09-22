
import { RoletypelistTableDefinition as TableDefinition} from './RoletypelistTableDefinition';

export const RoletypelistTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

