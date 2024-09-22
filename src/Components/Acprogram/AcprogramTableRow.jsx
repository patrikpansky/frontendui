
import { AcprogramTableDefinition as TableDefinition} from './AcprogramTableDefinition';
import { AcprogramLink as Link} from './AcprogramLink';

export const AcprogramTableRow = ({ acprogram, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogram.id + name }><Link acprogram={ acprogram } /></td>:
                    <td key={ acprogram.id + name}>{ acprogram[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

