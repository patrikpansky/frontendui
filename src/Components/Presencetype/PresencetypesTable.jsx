
import { PresencetypeTableDefinition as TableDefinition} from './PresencetypeTableDefinition';

import { PresencetypeTableRow as TableRow} from './PresencetypeTableRow';
import { PresencetypeTableHeaderRow as TableHeaderRow} from './PresencetypeTableHeaderRow';
import { PresencetypeTableRowSpan as TableRowSpan} from './PresencetypeTableRowSpan';
//import { PresencetypeLoadMoreButton as LoadMoreButton} from './PresencetypeLoadMoreButton';

export const PresencetypesTable = ({ presencetypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { presencetypes.map(
                    presencetype => <TableRow key={ presencetype.id } presencetype={ presencetype } tabledefinition={tabledefinition}/>
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

