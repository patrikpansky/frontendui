import { useState } from 'react'
import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll, LazyRender } from "@hrbolek/uoisfrontend-shared"
import { SectionMediumContent } from "../../Section/SectionMediumContent"
import { SectionPartsAttribute } from "../../Section/Vectors/SectionPartsAttribute"

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
    const sections = ([...form?.sections || []]).sort((a,b) => a?.order - b?.order)
    if (typeof sections === 'undefined') return null
    const [index, setIndex] = useState(0)
    const sectionToRender = sections[index]
    return (
        <>  

            <div className='btn-group' role='group' aria-label="Sekce formuláře">
            {sections.map(
                (section, _index) => 
                    <button key={section.id}
                        type={"button"} 
                        onClick={() => setIndex(_index)}
                        className={"btn btn-sm " + (index === _index? "btn-primary": "btn-outline-success")} 
                        >
                            {section?.name}
                    </button>
            )}
            </div>
            <LazyRender>
                <SectionPartsAttribute section={sectionToRender} />
            </LazyRender>
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