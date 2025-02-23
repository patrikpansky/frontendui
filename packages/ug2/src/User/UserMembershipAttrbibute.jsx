/**
 * A component for displaying the `membership` attribute of an user entity.
 *
 * This component checks if the `membership` attribute exists on the `user` object. If `membership` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `membership` attribute.
 *
 * @component
 * @param {Object} props - The props for the UserMembershipAttribute component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {*} [props.user.membership] - The membership attribute of the user entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `membership` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const userEntity = { membership: { id: 1, name: "Sample Membership" } };
 *
 * <UserMembershipAttribute user={userEntity} />
 */
export const UserMembershipAttribute = ({user}) => {
    const {membership} = user
    if (typeof membership === 'undefined') return null
    return (
        <>
            Probably {'<MembershipMediumCard membership=\{membership\} />'} <br />
            {JSON.stringify(membership)}
        </>
    )
}