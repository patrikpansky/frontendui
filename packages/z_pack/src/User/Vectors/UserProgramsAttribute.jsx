import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { InfiniteScroll } from "@hrbolek/uoisfrontend-shared"
import { ProgramMediumCard } from "../../Program"
import { AdmissionReadPageAsyncAction } from "../../Admission/Queries/AdmissionReadPageAsyncAction"
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { AdmissionLink } from "../../Admission/Components/AdmissionLink";
import { AdmissionDelete } from "../Components";


/**
 * A component for displaying the `programs` attribute of an user entity.
 *
 * This component checks if the `programs` attribute exists on the `user` object. If `programs` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `programs` array and
 * displays a placeholder message and a JSON representation for each item in the `programs`.
 *
 * @component
 * @param {Object} props - The props for the UserProgramsAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {Array} [props.user.programs] - An array of programs items associated with the user entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `programs` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { 
 *   programs: [
 *     { id: 1, name: "Program Item 1" }, 
 *     { id: 2, name: "Program Item 2" }
 *   ] 
 * };
 *
 * <UserProgramsAttribute user={userEntity} />
 */
export const UserProgramsAttribute = ({ programPage }) => {
    // if (typeof programs === 'undefined') return null
    return (
        <>
            {programPage.map(
                program => {
                    const { loading, dispatchResult } = useAsyncAction(AdmissionReadPageAsyncAction, {
                        limit: 100, skip: 0, where: {
                            program_id: { _eq: program.id }
                        }
                    });


                    return <div id={program.id} key={program.id}>
                        <ProgramMediumCard program={program}>

                        <div>
                            {JSON.stringify(dispatchResult)}
                            {dispatchResult?.data?.result?.map(admission => {
                                return (
                                    <div key={admission.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <AdmissionLink admission={admission} />
                                        <AdmissionDelete
                                            admission={admission}
                                            onDeleted={(id) => console.log("Deleted admission with id:", id)}
                                        />
                                    </div>
                                );
                            })}
                            {loading && <div>Loading...</div>}
                        </div>

                        </ProgramMediumCard> <br />
                        {/*JSON.stringify(program)*/}
                    </div>
                }
            )}
        </>
    )
}

const UserProgramsAttributeQuery = `
query programPage($skip: Int, $limit: Int) {
    result: programPage(skip: $skip, limit: $limit) {
            __typename
            id
        }
}
`

const UserProgramsAttributeAsyncAction = createAsyncGraphQLAction(
    UserProgramsAttributeQuery,
    processVectorAttributeFromGraphQLResult("result")
)

export const UserProgramsAttributeInfinite = ({ user }) => {
    const { programs } = user

    return (
        <InfiniteScroll
            Visualiser={'ProgramMediumCard'}
            actionParams={{ skip: 0, limit: 10 }}
            asyncAction={UserProgramsAttributeAsyncAction}
        />
    )
}