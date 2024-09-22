
import { ProjectcategoryTableDefinition as TableDefinition} from './ProjectcategoryTableDefinition';
import { ProjectcategoryLink as Link} from './ProjectcategoryLink';

export const ProjectcategoryTableRowSpan = ({ projectcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

