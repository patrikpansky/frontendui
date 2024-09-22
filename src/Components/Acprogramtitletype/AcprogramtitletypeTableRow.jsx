
import { AcprogramtitletypeTableDefinition as TableDefinition} from './AcprogramtitletypeTableDefinition';
import { AcprogramtitletypeLink as Link} from './AcprogramtitletypeLink';

export const AcprogramtitletypeTableRow = ({ acprogramtitletype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acprogramtitletype.id + name }><Link acprogramtitletype={ acprogramtitletype } /></td>:
                    <td key={ acprogramtitletype.id + name}>{ acprogramtitletype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

