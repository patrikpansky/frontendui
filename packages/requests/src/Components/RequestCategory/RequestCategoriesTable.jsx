import { ChildWrapper, InfiniteScroll } from "@hrbolek/uoisfrontend-shared"
import { RequestCategoryPageReadAsyncAction } from "../../Pages/Queries/RequestCategoryPageReadAsyncAction"


const RequestCategoryVisualiser = ({requestcategory, children}) => {
    return (
        <tr>
            <td>{requestcategory?.name}</td>
            <td>
                <ChildWrapper requestcategory={requestcategory} />
            </td>
        </tr>
    )
}

const RequestCategoriesVisualiser = ({items, children}) => {
    return (<>
        {items.map(
            requestcategory => <RequestCategoryVisualiser key={requestcategory.id} requestcategory={requestcategory} />
        )}
    </>)
}

export const RequestCategoriesTable = ({requestcategories, children}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Nastr</th>
                </tr>
            </thead>
            <tbody>
                <InfiniteScroll 
                    preloadedItems={requestcategories}
                    actionParams={{skip: 0, limit: 10}}
                    asyncAction={RequestCategoryPageReadAsyncAction}
                    Visualiser={RequestCategoriesVisualiser}
                >
                    {children}
                </InfiniteScroll>
            </tbody>
        </table>
    )
}