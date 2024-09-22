
import { FinancetypeTableDefinition as TableDefinition} from './FinancetypeTableDefinition';
import { FinancetypeLink as Link} from './FinancetypeLink';

export const FinancetypeTableRowSpan = ({ financetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

