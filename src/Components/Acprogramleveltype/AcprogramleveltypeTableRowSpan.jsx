
import { AcprogramleveltypeTableDefinition as TableDefinition} from './AcprogramleveltypeTableDefinition';
import { AcprogramleveltypeLink as Link} from './AcprogramleveltypeLink';

export const AcprogramleveltypeTableRowSpan = ({ acprogramleveltype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

