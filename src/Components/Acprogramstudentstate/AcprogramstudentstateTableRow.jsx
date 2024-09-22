
import { AcprogramstudentstateTableDefinition as TableDefinition} from './AcprogramstudentstateTableDefinition';
import { AcprogramstudentstateLink as Link} from './AcprogramstudentstateLink';

export const AcprogramstudentstateTableRow = ({ acprogramstudentstate, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramstudentstate.id + name }><Link acprogramstudentstate={ acprogramstudentstate } /></td>:
                    <td key={ acprogramstudentstate.id + name}>{ acprogramstudentstate[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

