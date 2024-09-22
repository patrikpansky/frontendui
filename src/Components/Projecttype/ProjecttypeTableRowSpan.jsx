
import { ProjecttypeTableDefinition as TableDefinition} from './ProjecttypeTableDefinition';
import { ProjecttypeLink as Link} from './ProjecttypeLink';

export const ProjecttypeTableRowSpan = ({ projecttype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

