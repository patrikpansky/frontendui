
import { infoTableDefinition as TableDefinition} from './infoTableDefinition';
import { infoLink as Link} from './infoLink';

export const infoTableRowSpan = ({ pageinfo, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

