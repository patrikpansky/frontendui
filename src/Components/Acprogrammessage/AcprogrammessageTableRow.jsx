
import { AcprogrammessageTableDefinition as TableDefinition} from './AcprogrammessageTableDefinition';
import { AcprogrammessageLink as Link} from './AcprogrammessageLink';

export const AcprogrammessageTableRow = ({ acprogrammessage, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogrammessage.id + name }><Link acprogrammessage={ acprogrammessage } /></td>:
                    <td key={ acprogrammessage.id + name}>{ acprogrammessage[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

