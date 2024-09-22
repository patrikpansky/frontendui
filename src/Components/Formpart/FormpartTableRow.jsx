
import { FormpartTableDefinition as TableDefinition} from './FormpartTableDefinition';
import { FormpartLink as Link} from './FormpartLink';

export const FormpartTableRow = ({ formpart, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formpart.id + name }><Link formpart={ formpart } /></td>:
                    <td key={ formpart.id + name}>{ formpart[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

