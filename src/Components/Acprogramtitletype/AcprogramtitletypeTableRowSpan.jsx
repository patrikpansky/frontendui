
import { AcprogramtitletypeTableDefinition as TableDefinition} from './AcprogramtitletypeTableDefinition';
import { AcprogramtitletypeLink as Link} from './AcprogramtitletypeLink';

export const AcprogramtitletypeTableRowSpan = ({ acprogramtitletype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

