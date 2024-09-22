
import { FacilitytypeTableDefinition as TableDefinition} from './FacilitytypeTableDefinition';

import { FacilitytypeTableRow as TableRow} from './FacilitytypeTableRow';
import { FacilitytypeTableHeaderRow as TableHeaderRow} from './FacilitytypeTableHeaderRow';
import { FacilitytypeTableRowSpan as TableRowSpan} from './FacilitytypeTableRowSpan';
//import { FacilitytypeLoadMoreButton as LoadMoreButton} from './FacilitytypeLoadMoreButton';

export const FacilitytypesTable = ({ facilitytypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { facilitytypes.map(
                    facilitytype => <TableRow key={ facilitytype.id } facilitytype={ facilitytype } tabledefinition={tabledefinition}/>
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

