
import { StatemachineTableDefinition as TableDefinition} from './StatemachineTableDefinition';
import { StatemachineLink as Link} from './StatemachineLink';

export const StatemachineTableRow = ({ statemachine, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ statemachine.id + name }><Link statemachine={ statemachine } /></td>:
                    <td key={ statemachine.id + name}>{ statemachine[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

