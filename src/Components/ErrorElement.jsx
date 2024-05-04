export const ErrorElement = (props) => {
    const {children} = props

    return (
        <div>
            {JSON.stringify(Object.keys(children))}
            <hr />
            {children}
        </div>
    )
}