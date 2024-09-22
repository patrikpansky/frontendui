
import { FacilityeventstatetypeTableDefinition as TableDefinition} from './FacilityeventstatetypeTableDefinition';
import { FacilityeventstatetypeLink as Link} from './FacilityeventstatetypeLink';

export const FacilityeventstatetypeTableRowSpan = ({ facilityeventstatetype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

