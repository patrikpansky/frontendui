
import { ActopicTableDefinition as TableDefinition} from './ActopicTableDefinition';
import { ActopicLink as Link} from './ActopicLink';

export const ActopicTableRowSpan = ({ actopic, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

