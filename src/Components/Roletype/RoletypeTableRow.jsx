
import { RoletypeTableDefinition as TableDefinition} from './RoletypeTableDefinition';
import { RoletypeLink as Link} from './RoletypeLink';

export const RoletypeTableRow = ({ roletype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ roletype.id + name }><Link roletype={ roletype } /></td>:
                    <td key={ roletype.id + name}>{ roletype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

