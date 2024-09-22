
import { FinancecategoryTableDefinition as TableDefinition} from './FinancecategoryTableDefinition';
import { FinancecategoryLink as Link} from './FinancecategoryLink';

export const FinancecategoryTableRow = ({ financecategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ financecategory.id + name }><Link financecategory={ financecategory } /></td>:
                    <td key={ financecategory.id + name}>{ financecategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

