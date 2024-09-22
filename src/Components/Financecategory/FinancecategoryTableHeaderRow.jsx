
import { FinancecategoryTableDefinition as TableDefinition} from './FinancecategoryTableDefinition';

export const FinancecategoryTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

