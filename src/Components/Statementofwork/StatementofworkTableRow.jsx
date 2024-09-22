
import { StatementofworkTableDefinition as TableDefinition} from './StatementofworkTableDefinition';
import { StatementofworkLink as Link} from './StatementofworkLink';

export const StatementofworkTableRow = ({ statementofwork, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ statementofwork.id + name }><Link statementofwork={ statementofwork } /></td>:
                    <td key={ statementofwork.id + name}>{ statementofwork[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

