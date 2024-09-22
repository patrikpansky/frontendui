
import { StateTableDefinition as TableDefinition} from './StateTableDefinition';
import { StateLink as Link} from './StateLink';

export const StateTableRow = ({ state, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ state.id + name }><Link state={ state } /></td>:
                    <td key={ state.id + name}>{ state[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

