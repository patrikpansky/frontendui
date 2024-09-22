
import { PublicationauthorTableDefinition as TableDefinition} from './PublicationauthorTableDefinition';

import { PublicationauthorTableRow as TableRow} from './PublicationauthorTableRow';
import { PublicationauthorTableHeaderRow as TableHeaderRow} from './PublicationauthorTableHeaderRow';
import { PublicationauthorTableRowSpan as TableRowSpan} from './PublicationauthorTableRowSpan';
//import { PublicationauthorLoadMoreButton as LoadMoreButton} from './PublicationauthorLoadMoreButton';

export const PublicationauthorsTable = ({ publicationauthors, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { publicationauthors.map(
                    publicationauthor => <TableRow key={ publicationauthor.id } publicationauthor={ publicationauthor } tabledefinition={tabledefinition}/>
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

