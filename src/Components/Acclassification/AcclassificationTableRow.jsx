
import { AcclassificationTableDefinition as TableDefinition} from './AcclassificationTableDefinition';
import { AcclassificationLink as Link} from './AcclassificationLink';

export const AcclassificationTableRow = ({ acclassification, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acclassification.id + name }><Link acclassification={ acclassification } /></td>:
                    <td key={ acclassification.id + name}>{ acclassification[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

