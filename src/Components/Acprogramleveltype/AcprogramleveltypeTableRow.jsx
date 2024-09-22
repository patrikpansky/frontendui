
import { AcprogramleveltypeTableDefinition as TableDefinition} from './AcprogramleveltypeTableDefinition';
import { AcprogramleveltypeLink as Link} from './AcprogramleveltypeLink';

export const AcprogramleveltypeTableRow = ({ acprogramleveltype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramleveltype.id + name }><Link acprogramleveltype={ acprogramleveltype } /></td>:
                    <td key={ acprogramleveltype.id + name}>{ acprogramleveltype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

