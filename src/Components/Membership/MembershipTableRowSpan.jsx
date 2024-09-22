
import { MembershipTableDefinition as TableDefinition} from './MembershipTableDefinition';
import { MembershipLink as Link} from './MembershipLink';

export const MembershipTableRowSpan = ({ membership, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

