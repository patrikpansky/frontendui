
import { StatementofworkTableDefinition as TableDefinition} from './StatementofworkTableDefinition';
import { StatementofworkLink as Link} from './StatementofworkLink';

export const StatementofworkTableRowSpan = ({ statementofwork, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

