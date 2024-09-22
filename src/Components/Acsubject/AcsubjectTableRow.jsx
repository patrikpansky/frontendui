
import { AcsubjectTableDefinition as TableDefinition} from './AcsubjectTableDefinition';
import { AcsubjectLink as Link} from './AcsubjectLink';

export const AcsubjectTableRow = ({ acsubject, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acsubject.id + name }><Link acsubject={ acsubject } /></td>:
                    <td key={ acsubject.id + name}>{ acsubject[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

