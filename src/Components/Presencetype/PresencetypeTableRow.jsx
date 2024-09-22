
import { PresencetypeTableDefinition as TableDefinition} from './PresencetypeTableDefinition';
import { PresencetypeLink as Link} from './PresencetypeLink';

export const PresencetypeTableRow = ({ presencetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ presencetype.id + name }><Link presencetype={ presencetype } /></td>:
                    <td key={ presencetype.id + name}>{ presencetype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

