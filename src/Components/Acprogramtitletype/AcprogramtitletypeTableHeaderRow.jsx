
import { AcprogramtitletypeTableDefinition as TableDefinition} from './AcprogramtitletypeTableDefinition';

export const AcprogramtitletypeTableHeaderRow = ({ tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => <th key={ name }>{ value.label }</th>
            )}
            {children}
        </tr>
    )
}

