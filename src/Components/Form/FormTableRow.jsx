
import { FormTableDefinition as TableDefinition} from './FormTableDefinition';
import { FormLink as Link} from './FormLink';

export const FormTableRow = ({ form, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ form.id + name }><Link form={ form } /></td>:
                    <td key={ form.id + name}>{ form[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

