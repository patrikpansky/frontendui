
import { RbacobjectTableDefinition as TableDefinition} from './RbacobjectTableDefinition';
import { RbacobjectLink as Link} from './RbacobjectLink';

export const RbacobjectTableRow = ({ rbacobject, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ rbacobject.id + name }><Link rbacobject={ rbacobject } /></td>:
                    <td key={ rbacobject.id + name}>{ rbacobject[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

