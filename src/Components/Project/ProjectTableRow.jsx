
import { ProjectTableDefinition as TableDefinition} from './ProjectTableDefinition';
import { ProjectLink as Link} from './ProjectLink';

export const ProjectTableRow = ({ project, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ project.id + name }><Link project={ project } /></td>:
                    <td key={ project.id + name}>{ project[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

