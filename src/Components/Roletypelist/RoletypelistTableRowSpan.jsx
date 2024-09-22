
import { RoletypelistTableDefinition as TableDefinition} from './RoletypelistTableDefinition';
import { RoletypelistLink as Link} from './RoletypelistLink';

export const RoletypelistTableRowSpan = ({ roletypelist, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

