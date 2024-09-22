
import { InvitationtypeTableDefinition as TableDefinition} from './InvitationtypeTableDefinition';

export const InvitationtypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

