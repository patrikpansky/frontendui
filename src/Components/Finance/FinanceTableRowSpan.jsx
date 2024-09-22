
import { FinanceTableDefinition as TableDefinition} from './FinanceTableDefinition';
import { FinanceLink as Link} from './FinanceLink';

export const FinanceTableRowSpan = ({ finance, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

