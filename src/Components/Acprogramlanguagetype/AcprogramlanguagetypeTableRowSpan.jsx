
import { AcprogramlanguagetypeTableDefinition as TableDefinition} from './AcprogramlanguagetypeTableDefinition';
import { AcprogramlanguagetypeLink as Link} from './AcprogramlanguagetypeLink';

export const AcprogramlanguagetypeTableRowSpan = ({ acprogramlanguagetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

