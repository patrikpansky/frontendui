
import { RoletypelistTableDefinition as TableDefinition} from './RoletypelistTableDefinition';
import { RoletypelistLink as Link} from './RoletypelistLink';

export const RoletypelistTableRow = ({ roletypelist, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ roletypelist.id + name }><Link roletypelist={ roletypelist } /></td>:
                    <td key={ roletypelist.id + name}>{ roletypelist[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

