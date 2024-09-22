
import { FinancetypeTableDefinition as TableDefinition} from './FinancetypeTableDefinition';
import { FinancetypeLink as Link} from './FinancetypeLink';

export const FinancetypeTableRow = ({ financetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ financetype.id + name }><Link financetype={ financetype } /></td>:
                    <td key={ financetype.id + name}>{ financetype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

