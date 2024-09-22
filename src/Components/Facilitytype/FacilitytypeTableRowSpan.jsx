
import { FacilitytypeTableDefinition as TableDefinition} from './FacilitytypeTableDefinition';
import { FacilitytypeLink as Link} from './FacilitytypeLink';

export const FacilitytypeTableRowSpan = ({ facilitytype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

