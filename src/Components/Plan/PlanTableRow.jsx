
import { PlanTableDefinition as TableDefinition} from './PlanTableDefinition';
import { PlanLink as Link} from './PlanLink';

export const PlanTableRow = ({ plan, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ plan.id + name }><Link plan={ plan } /></td>:
                    <td key={ plan.id + name}>{ plan[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

