
import { AcclassificationlevelTableDefinition as TableDefinition} from './AcclassificationlevelTableDefinition';

import { AcclassificationlevelTableRow as TableRow} from './AcclassificationlevelTableRow';
import { AcclassificationlevelTableHeaderRow as TableHeaderRow} from './AcclassificationlevelTableHeaderRow';
import { AcclassificationlevelTableRowSpan as TableRowSpan} from './AcclassificationlevelTableRowSpan';
//import { AcclassificationlevelLoadMoreButton as LoadMoreButton} from './AcclassificationlevelLoadMoreButton';

export const AcclassificationlevelsTable = ({ acclassificationlevels, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acclassificationlevels.map(
                    acclassificationlevel => <TableRow key={ acclassificationlevel.id } acclassificationlevel={ acclassificationlevel } tabledefinition={tabledefinition}/>
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

