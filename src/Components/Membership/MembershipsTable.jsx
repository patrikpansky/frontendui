
import { MembershipTableDefinition as TableDefinition} from './MembershipTableDefinition';

import { MembershipTableRow as TableRow} from './MembershipTableRow';
import { MembershipTableHeaderRow as TableHeaderRow} from './MembershipTableHeaderRow';
import { MembershipTableRowSpan as TableRowSpan} from './MembershipTableRowSpan';
//import { MembershipLoadMoreButton as LoadMoreButton} from './MembershipLoadMoreButton';

export const MembershipsTable = ({ memberships, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { memberships.map(
                    membership => <TableRow key={ membership.id } membership={ membership } tabledefinition={tabledefinition}/>
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

