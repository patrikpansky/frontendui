
import { AcprogramtypeTableDefinition as TableDefinition} from './AcprogramtypeTableDefinition';
import { AcprogramtypeLink as Link} from './AcprogramtypeLink';

export const AcprogramtypeTableRow = ({ acprogramtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramtype.id + name }><Link acprogramtype={ acprogramtype } /></td>:
                    <td key={ acprogramtype.id + name}>{ acprogramtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

