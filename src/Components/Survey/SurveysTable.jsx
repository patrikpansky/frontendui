
import { SurveyTableDefinition as TableDefinition} from './SurveyTableDefinition';

import { SurveyTableRow as TableRow} from './SurveyTableRow';
import { SurveyTableHeaderRow as TableHeaderRow} from './SurveyTableHeaderRow';
import { SurveyTableRowSpan as TableRowSpan} from './SurveyTableRowSpan';
//import { SurveyLoadMoreButton as LoadMoreButton} from './SurveyLoadMoreButton';

export const SurveysTable = ({ surveys, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { surveys.map(
                    survey => <TableRow key={ survey.id } survey={ survey } tabledefinition={tabledefinition}/>
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

