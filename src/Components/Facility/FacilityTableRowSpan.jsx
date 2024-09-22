
import { FacilityTableDefinition as TableDefinition} from './FacilityTableDefinition';
import { FacilityLink as Link} from './FacilityLink';

export const FacilityTableRowSpan = ({ facility, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

