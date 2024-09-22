
import { FormcategoryTableDefinition as TableDefinition} from './FormcategoryTableDefinition';
import { FormcategoryLink as Link} from './FormcategoryLink';

export const FormcategoryTableRow = ({ formcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formcategory.id + name }><Link formcategory={ formcategory } /></td>:
                    <td key={ formcategory.id + name}>{ formcategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

