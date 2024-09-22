
import { StatemachineTableDefinition as TableDefinition} from './StatemachineTableDefinition';
import { StatemachineLink as Link} from './StatemachineLink';

export const StatemachineTableRowSpan = ({ statemachine, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

