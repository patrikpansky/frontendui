
import { FormitemTableDefinition as TableDefinition} from './FormitemTableDefinition';
import { FormitemLink as Link} from './FormitemLink';

export const FormitemTableRow = ({ formitem, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formitem.id + name }><Link formitem={ formitem } /></td>:
                    <td key={ formitem.id + name}>{ formitem[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

