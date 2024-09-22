
import { RbacobjectTableDefinition as TableDefinition} from './RbacobjectTableDefinition';
import { RbacobjectLink as Link} from './RbacobjectLink';

export const RbacobjectTableRowSpan = ({ rbacobject, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

