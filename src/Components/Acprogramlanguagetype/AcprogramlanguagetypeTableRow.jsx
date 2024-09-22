
import { AcprogramlanguagetypeTableDefinition as TableDefinition} from './AcprogramlanguagetypeTableDefinition';
import { AcprogramlanguagetypeLink as Link} from './AcprogramlanguagetypeLink';

export const AcprogramlanguagetypeTableRow = ({ acprogramlanguagetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramlanguagetype.id + name }><Link acprogramlanguagetype={ acprogramlanguagetype } /></td>:
                    <td key={ acprogramlanguagetype.id + name}>{ acprogramlanguagetype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

