export const UserMediumContent = ({user}) => {
    return (
        <>
            {JSON.stringify(user, null, 4)}
        </>
    )
}