
import { RolecategoryTableDefinition as TableDefinition} from './RolecategoryTableDefinition';
import { RolecategoryLink as Link} from './RolecategoryLink';

export const RolecategoryTableRowSpan = ({ rolecategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

