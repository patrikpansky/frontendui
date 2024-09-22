
import { RoletypeTableDefinition as TableDefinition} from './RoletypeTableDefinition';
import { RoletypeLink as Link} from './RoletypeLink';

export const RoletypeTableRowSpan = ({ roletype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

