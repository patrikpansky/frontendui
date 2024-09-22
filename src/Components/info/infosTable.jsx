
import { infoTableDefinition as TableDefinition} from './infoTableDefinition';

import { infoTableRow as TableRow} from './infoTableRow';
import { infoTableHeaderRow as TableHeaderRow} from './infoTableHeaderRow';
import { infoTableRowSpan as TableRowSpan} from './infoTableRowSpan';
//import { infoLoadMoreButton as LoadMoreButton} from './infoLoadMoreButton';

export const infosTable = ({ pageinfos, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { pageinfos.map(
                    pageinfo => <TableRow key={ pageinfo.id } pageinfo={ pageinfo } tabledefinition={tabledefinition}/>
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

