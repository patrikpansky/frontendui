
import { FormitemcategoryTableDefinition as TableDefinition} from './FormitemcategoryTableDefinition';
import { FormitemcategoryLink as Link} from './FormitemcategoryLink';

export const FormitemcategoryTableRow = ({ formitemcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formitemcategory.id + name }><Link formitemcategory={ formitemcategory } /></td>:
                    <td key={ formitemcategory.id + name}>{ formitemcategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

