
import { AcclassificationlevelTableDefinition as TableDefinition} from './AcclassificationlevelTableDefinition';
import { AcclassificationlevelLink as Link} from './AcclassificationlevelLink';

export const AcclassificationlevelTableRow = ({ acclassificationlevel, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acclassificationlevel.id + name }><Link acclassificationlevel={ acclassificationlevel } /></td>:
                    <td key={ acclassificationlevel.id + name}>{ acclassificationlevel[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

