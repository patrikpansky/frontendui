
import { QuestiontypeTableDefinition as TableDefinition} from './QuestiontypeTableDefinition';

import { QuestiontypeTableRow as TableRow} from './QuestiontypeTableRow';
import { QuestiontypeTableHeaderRow as TableHeaderRow} from './QuestiontypeTableHeaderRow';
import { QuestiontypeTableRowSpan as TableRowSpan} from './QuestiontypeTableRowSpan';
//import { QuestiontypeLoadMoreButton as LoadMoreButton} from './QuestiontypeLoadMoreButton';

export const QuestiontypesTable = ({ questiontypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { questiontypes.map(
                    questiontype => <TableRow key={ questiontype.id } questiontype={ questiontype } tabledefinition={tabledefinition}/>
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

