
import { PublicationTableDefinition as TableDefinition} from './PublicationTableDefinition';

import { PublicationTableRow as TableRow} from './PublicationTableRow';
import { PublicationTableHeaderRow as TableHeaderRow} from './PublicationTableHeaderRow';
import { PublicationTableRowSpan as TableRowSpan} from './PublicationTableRowSpan';
//import { PublicationLoadMoreButton as LoadMoreButton} from './PublicationLoadMoreButton';

export const PublicationsTable = ({ publications, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { publications.map(
                    publication => <TableRow key={ publication.id } publication={ publication } tabledefinition={tabledefinition}/>
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

