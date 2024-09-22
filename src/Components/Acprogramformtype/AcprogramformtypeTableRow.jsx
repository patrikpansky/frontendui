
import { AcprogramformtypeTableDefinition as TableDefinition} from './AcprogramformtypeTableDefinition';
import { AcprogramformtypeLink as Link} from './AcprogramformtypeLink';

export const AcprogramformtypeTableRow = ({ acprogramformtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramformtype.id + name }><Link acprogramformtype={ acprogramformtype } /></td>:
                    <td key={ acprogramformtype.id + name}>{ acprogramformtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

