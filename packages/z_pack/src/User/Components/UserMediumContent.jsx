/**
 * A component that displays medium-level content for an user entity.
 *
 * This component renders a label "UserMediumContent" followed by a serialized representation of the `user` object
 * and any additional child content. It is designed to handle and display information about an user entity object.
 *
 * @component
 * @param {Object} props - The properties for the UserMediumContent component.
 * @param {Object} props.user - The object representing the user entity.
 * @param {string|number} props.user.id - The unique identifier for the user entity.
 * @param {string} props.user.name - The name or label of the user entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `user` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const userEntity = { id: 123, name: "Sample Entity" };
 * 
 * <UserMediumContent user={userEntity}>
 *   <p>Additional information about the entity.</p>
 * </UserMediumContent>
 */
export const UserMediumContent = ({user, children}) => {
    if (!user) return null;

    // Formátování času na český formát bez sekund
    const formatDate = (isoString) => {
        if (!isoString) return null;
        const date = new Date(isoString);
        return date.toLocaleString("cs-CZ", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    return (
        <div>
            <div><b>ID:</b> {user.id}</div>
            {user.name && <div><b>Jméno:</b> {user.name}</div>}
            {user.surname && <div><b>Příjmení:</b> {user.surname}</div>}
            {user.email && (
                <div>
                    <b>Email:</b> <a href={`mailto:${user.email}`}>{user.email}</a>
                </div>
            )}
            {user.lastchange && (
                <div>
                    <b>Poslední změna:</b> {formatDate(user.lastchange)}
                </div>
            )}
            {children}
        </div>
    );
}