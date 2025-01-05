import { Input } from "@hrbolek/uoisfrontend-shared"

export const GroupCategoryMediumEditableContent = ({...props}) => {
    return (<>
        <Input {...props} id="name" label="Název" className="form-control" />
        <Input {...props} id="nameEn" label="Anglický název" className="form-control" />
    </>)
}

/**
 * A functional utility that generates editable input fields for "Group Category" details.
 *
 * This function returns an array of `<Input>` components, which can be used directly or wrapped
 * in a parent component or container. Each `<Input>` represents a specific field for editing.
 *
 * @function RenderGroupCategoryMediumEditableContent
 * @returns {JSX.Element[]} An array of `<Input>` elements for editing the "Group Category" details.
 *
 * @example
 * // Example usage wrapped in a parent component:
 * const ParentComponent = () => (
 *   <form>
 *     {RenderGroupCategoryMediumEditableContent()}
 *   </form>
 * );
 *
 * @remarks
 * - The returned array must be used within a valid JSX context, such as inside a `<form>` or a `<div>`.
 * - Each `<Input>` is styled with `className="form-control"` for consistency with Bootstrap styling.
 * - This utility is not a valid React component and cannot be used as `<RenderGroupCategoryMediumEditableContent />`.
 *
 * @see Input - The reusable input component used for rendering each field.
 */
export const RenderGroupCategoryMediumEditableContent = () => [
    <Input id="name" label="Název" className="form-control" />,
    <Input id="nameEn" label="Anglický název" className="form-control" />
]