
import { RolecategoryTableDefinition as TableDefinition} from './RolecategoryTableDefinition';
import { RolecategoryLink as Link} from './RolecategoryLink';

export const RolecategoryTableRow = ({ rolecategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ rolecategory.id + name }><Link rolecategory={ rolecategory } /></td>:
                    <td key={ rolecategory.id + name}>{ rolecategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

