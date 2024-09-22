
import { PlannedlessonTableDefinition as TableDefinition} from './PlannedlessonTableDefinition';
import { PlannedlessonLink as Link} from './PlannedlessonLink';

export const PlannedlessonTableRow = ({ plannedlesson, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ plannedlesson.id + name }><Link plannedlesson={ plannedlesson } /></td>:
                    <td key={ plannedlesson.id + name}>{ plannedlesson[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

