
import { ExternalidcategoryTableDefinition as TableDefinition} from './ExternalidcategoryTableDefinition';

export const ExternalidcategoryTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

