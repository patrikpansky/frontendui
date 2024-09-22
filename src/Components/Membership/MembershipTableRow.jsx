
import { MembershipTableDefinition as TableDefinition} from './MembershipTableDefinition';
import { MembershipLink as Link} from './MembershipLink';

export const MembershipTableRow = ({ membership, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ membership.id + name }><Link membership={ membership } /></td>:
                    <td key={ membership.id + name}>{ membership[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

