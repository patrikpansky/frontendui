
import { FinanceTableDefinition as TableDefinition} from './FinanceTableDefinition';
import { FinanceLink as Link} from './FinanceLink';

export const FinanceTableRow = ({ finance, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ finance.id + name }><Link finance={ finance } /></td>:
                    <td key={ finance.id + name}>{ finance[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

