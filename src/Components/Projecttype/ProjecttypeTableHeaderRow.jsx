
import { ProjecttypeTableDefinition as TableDefinition} from './ProjecttypeTableDefinition';

export const ProjecttypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

