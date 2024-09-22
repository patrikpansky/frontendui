
import { ProjectTableDefinition as TableDefinition} from './ProjectTableDefinition';
import { ProjectLink as Link} from './ProjectLink';

export const ProjectTableRowSpan = ({ project, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

