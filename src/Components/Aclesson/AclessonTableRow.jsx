
import { AclessonTableDefinition as TableDefinition} from './AclessonTableDefinition';
import { AclessonLink as Link} from './AclessonLink';

export const AclessonTableRow = ({ aclesson, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ aclesson.id + name }><Link aclesson={ aclesson } /></td>:
                    <td key={ aclesson.id + name}>{ aclesson[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

