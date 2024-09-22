
import { StatetransitionTableDefinition as TableDefinition} from './StatetransitionTableDefinition';
import { StatetransitionLink as Link} from './StatetransitionLink';

export const StatetransitionTableRow = ({ statetransition, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ statetransition.id + name }><Link statetransition={ statetransition } /></td>:
                    <td key={ statetransition.id + name}>{ statetransition[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

