
import { FacilityeventstatetypeTableDefinition as TableDefinition} from './FacilityeventstatetypeTableDefinition';
import { FacilityeventstatetypeLink as Link} from './FacilityeventstatetypeLink';

export const FacilityeventstatetypeTableRow = ({ facilityeventstatetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ facilityeventstatetype.id + name }><Link facilityeventstatetype={ facilityeventstatetype } /></td>:
                    <td key={ facilityeventstatetype.id + name}>{ facilityeventstatetype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

