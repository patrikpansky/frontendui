
import { AcprogramstudentTableDefinition as TableDefinition} from './AcprogramstudentTableDefinition';
import { AcprogramstudentLink as Link} from './AcprogramstudentLink';

export const AcprogramstudentTableRow = ({ acprogramstudent, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramstudent.id + name }><Link acprogramstudent={ acprogramstudent } /></td>:
                    <td key={ acprogramstudent.id + name}>{ acprogramstudent[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

