
import { FinancecategoryTableDefinition as TableDefinition} from './FinancecategoryTableDefinition';
import { FinancecategoryLink as Link} from './FinancecategoryLink';

export const FinancecategoryTableRowSpan = ({ financecategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

