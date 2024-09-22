
import { AnswerTableDefinition as TableDefinition} from './AnswerTableDefinition';

import { AnswerTableRow as TableRow} from './AnswerTableRow';
import { AnswerTableHeaderRow as TableHeaderRow} from './AnswerTableHeaderRow';
import { AnswerTableRowSpan as TableRowSpan} from './AnswerTableRowSpan';
//import { AnswerLoadMoreButton as LoadMoreButton} from './AnswerLoadMoreButton';

export const AnswersTable = ({ answers, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { answers.map(
                    answer => <TableRow key={ answer.id } answer={ answer } tabledefinition={tabledefinition}/>
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

