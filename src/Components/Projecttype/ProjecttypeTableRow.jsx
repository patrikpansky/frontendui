
import { ProjecttypeTableDefinition as TableDefinition} from './ProjecttypeTableDefinition';
import { ProjecttypeLink as Link} from './ProjecttypeLink';

export const ProjecttypeTableRow = ({ projecttype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ projecttype.id + name }><Link projecttype={ projecttype } /></td>:
                    <td key={ projecttype.id + name}>{ projecttype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

