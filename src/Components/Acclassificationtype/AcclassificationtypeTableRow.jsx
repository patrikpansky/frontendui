
import { AcclassificationtypeTableDefinition as TableDefinition} from './AcclassificationtypeTableDefinition';
import { AcclassificationtypeLink as Link} from './AcclassificationtypeLink';

export const AcclassificationtypeTableRow = ({ acclassificationtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acclassificationtype.id + name }><Link acclassificationtype={ acclassificationtype } /></td>:
                    <td key={ acclassificationtype.id + name}>{ acclassificationtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

