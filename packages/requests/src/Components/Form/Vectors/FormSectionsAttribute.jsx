import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"

/**
 * A component for displaying the `section` attribute of an form entity.
 *
 * This component checks if the `section` attribute exists on the `form` object. If `section` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `section` array and
 * displays a placeholder message and a JSON representation for each item in the `section`.
 *
 * @component
 * @param {Object} props - The props for the FormSectionAttribute component.
 * @param {Object} props.form - The object representing the form entity.
 * @param {Array} [props.form.section] - An array of section items associated with the form entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `section` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const formEntity = { 
 *   section: [
 *     { id: 1, name: "Section Item 1" }, 
 *     { id: 2, name: "Section Item 2" }
 *   ] 
 * };
 *
 * <FormSectionAttribute form={formEntity} />
 */
export const FormSectionAttribute = ({form}) => {
    const {section} = form
    if (typeof section === 'undefined') return null
    return (
        <>
            {section.map(
                item => <div key={item.id}>
                    Probably {'<SectionMediumCard section=\{item\} />'} <br />
                    {JSON.stringify(item)}
                </div>
            )}
        </>
    )
}

const SectionAttributeQuery = `
query FormQueryRead($id: id, $where: SectionInputFilter, $skip: Int, $limit: Int) {
    result: formById(id: $id) {
        __typename
        id
        section(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const SectionAttributeAsyncAction = createAsyncGraphQLAction(
    SectionAttributeQuery,
    processVectorAttributeFromGraphQLResult("section")
)

export const FormSectionAttributeInifite = ({form}) => { 
    const {section} = form

    return (
        <InfiniteScroll 
            Visualiser={'SectionMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={SectionAttributeAsyncAction}
        />
    )
}