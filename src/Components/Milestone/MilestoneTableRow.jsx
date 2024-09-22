
import { MilestoneTableDefinition as TableDefinition} from './MilestoneTableDefinition';
import { MilestoneLink as Link} from './MilestoneLink';

export const MilestoneTableRow = ({ milestone, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ milestone.id + name }><Link milestone={ milestone } /></td>:
                    <td key={ milestone.id + name}>{ milestone[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

