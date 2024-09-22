
import { PresencetypeTableDefinition as TableDefinition} from './PresencetypeTableDefinition';
import { PresencetypeLink as Link} from './PresencetypeLink';

export const PresencetypeTableRowSpan = ({ presencetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

