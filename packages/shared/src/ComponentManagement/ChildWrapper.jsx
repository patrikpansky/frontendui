import React from 'react'

/**
 * ChildWrapper Component
 *
 * A utility React component that clones its children and injects additional props into them.
 * It safely iterates over all child elements using `React.Children.map` and enhances each child
 * with new props using `React.cloneElement`.
 *
 * @component
 * @param {Object} props - The props for the ChildWrapper component.
 * @param {React.ReactNode} props.children - The children elements to be cloned and enhanced.
 * @param {...any} props - Additional props to be passed to each child element.
 *
 * @returns {JSX.Element} A fragment containing the cloned children with injected props.
 *
 * @example
 * // Example usage:
 * const role = { id: 1, name: 'Admin' };
 *
 * <ChildWrapper role={role}>
 *     <CustomButton />
 *     <CustomIcon />
 * </ChildWrapper>
 *
 * // Result: Both <CustomButton /> and <CustomIcon /> receive the 'role' prop.
 */
export const ChildWrapper = ({ children, ...props }) => {
    // const { onChange=()=>null } = props
    // React.useEffect(() => {
    //     // Log all children attributes
    //     React.Children.forEach(children, (child) => {
    //       if (React.isValidElement(child)) {
    //         const {id, defaultValue, value} = child.props
    //         const e = {target: {id, value: (value || defaultValue)}}
    //         console.log(e);
    //         onChange(e)
    //       }
    //     });
    //   }, [children]);    
    return (
        <>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { ...props })
            )}
        </>
    );
};
