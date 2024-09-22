
import { FacilityeventstatetypeTableDefinition as TableDefinition} from './FacilityeventstatetypeTableDefinition';

import { FacilityeventstatetypeTableRow as TableRow} from './FacilityeventstatetypeTableRow';
import { FacilityeventstatetypeTableHeaderRow as TableHeaderRow} from './FacilityeventstatetypeTableHeaderRow';
import { FacilityeventstatetypeTableRowSpan as TableRowSpan} from './FacilityeventstatetypeTableRowSpan';
//import { FacilityeventstatetypeLoadMoreButton as LoadMoreButton} from './FacilityeventstatetypeLoadMoreButton';

export const FacilityeventstatetypesTable = ({ facilityeventstatetypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { facilityeventstatetypes.map(
                    facilityeventstatetype => <TableRow key={ facilityeventstatetype.id } facilityeventstatetype={ facilityeventstatetype } tabledefinition={tabledefinition}/>
                )}
            </tbody>
            <tfoot>
                <TableRowSpan>
                    {children}
                </TableRowSpan>
            </tfoot>
        </table>
    )
}

