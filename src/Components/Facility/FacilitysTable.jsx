
import { FacilityTableDefinition as TableDefinition} from './FacilityTableDefinition';

import { FacilityTableRow as TableRow} from './FacilityTableRow';
import { FacilityTableHeaderRow as TableHeaderRow} from './FacilityTableHeaderRow';
import { FacilityTableRowSpan as TableRowSpan} from './FacilityTableRowSpan';
//import { FacilityLoadMoreButton as LoadMoreButton} from './FacilityLoadMoreButton';

export const FacilitysTable = ({ facilitys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { facilitys.map(
                    facility => <TableRow key={ facility.id } facility={ facility } tabledefinition={tabledefinition}/>
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

