
import { GrouptypeTableDefinition as TableDefinition} from './GrouptypeTableDefinition';
import { GrouptypeLink as Link} from './GrouptypeLink';

export const GrouptypeTableRow = ({ grouptype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ grouptype.id + name }><Link grouptype={ grouptype } /></td>:
                    <td key={ grouptype.id + name}>{ grouptype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

