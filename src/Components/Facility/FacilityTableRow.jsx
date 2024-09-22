
import { FacilityTableDefinition as TableDefinition} from './FacilityTableDefinition';
import { FacilityLink as Link} from './FacilityLink';

export const FacilityTableRow = ({ facility, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ facility.id + name }><Link facility={ facility } /></td>:
                    <td key={ facility.id + name}>{ facility[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

