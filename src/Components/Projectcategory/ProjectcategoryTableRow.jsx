
import { ProjectcategoryTableDefinition as TableDefinition} from './ProjectcategoryTableDefinition';
import { ProjectcategoryLink as Link} from './ProjectcategoryLink';

export const ProjectcategoryTableRow = ({ projectcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ projectcategory.id + name }><Link projectcategory={ projectcategory } /></td>:
                    <td key={ projectcategory.id + name}>{ projectcategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

