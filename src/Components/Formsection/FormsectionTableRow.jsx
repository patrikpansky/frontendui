
import { FormsectionTableDefinition as TableDefinition} from './FormsectionTableDefinition';
import { FormsectionLink as Link} from './FormsectionLink';

export const FormsectionTableRow = ({ formsection, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formsection.id + name }><Link formsection={ formsection } /></td>:
                    <td key={ formsection.id + name}>{ formsection[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

