
import { QuestionTableDefinition as TableDefinition} from './QuestionTableDefinition';

import { QuestionTableRow as TableRow} from './QuestionTableRow';
import { QuestionTableHeaderRow as TableHeaderRow} from './QuestionTableHeaderRow';
import { QuestionTableRowSpan as TableRowSpan} from './QuestionTableRowSpan';
//import { QuestionLoadMoreButton as LoadMoreButton} from './QuestionLoadMoreButton';

export const QuestionsTable = ({ questions, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { questions.map(
                    question => <TableRow key={ question.id } question={ question } tabledefinition={tabledefinition}/>
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

