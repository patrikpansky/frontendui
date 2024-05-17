export const UseSelect = (SelectComponent) => {
    const result = ({item, onClick, ...rest}) => {
        const onClick_ = (event) => {
            const value = event.target.value
            if (onClick) {
                onClick(value)
            }
        }
        return (
            <SelectComponent {...rest} value={item?.value} onClick={onClick_} />
        )       
    }
    result.displayName = "UseSelect." + (SelectComponent?.displayName || "uknown SelectComponent")
    return result 
}