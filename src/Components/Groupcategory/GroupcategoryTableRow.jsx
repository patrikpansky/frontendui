
import { GroupcategoryTableDefinition as TableDefinition} from './GroupcategoryTableDefinition';
import { GroupcategoryLink as Link} from './GroupcategoryLink';

export const GroupcategoryTableRow = ({ groupcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ groupcategory.id + name }><Link groupcategory={ groupcategory } /></td>:
                    <td key={ groupcategory.id + name}>{ groupcategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

