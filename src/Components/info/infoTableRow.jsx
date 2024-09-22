
import { infoTableDefinition as TableDefinition} from './infoTableDefinition';
import { infoLink as Link} from './infoLink';

export const infoTableRow = ({ pageinfo, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ pageinfo.id + name }><Link pageinfo={ pageinfo } /></td>:
                    <td key={ pageinfo.id + name}>{ pageinfo[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

