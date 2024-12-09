import React, { useEffect, useRef, useState } from "react";
import { useFreshItem } from "../../Hooks";
import { useDispatch, useSelector } from "react-redux";
import { CreateAsyncActionFromQuery } from "../../Queries";

/**
 * High-order function to create a lazy-loading component using a custom hook.
 *
 * @param {React.Component} WrappedComponent - The component to display the fetched entity.
 * @param {string} entityName - The name of the entity prop.
 * @param {function} asyncAction - The async Redux action to fetch the entity.
 *
 * @returns {React.Component} The lazy-loading component.
 */
export const createLazyComponent = (WrappedComponent, entityName, asyncAction) => {
    function LazyComponent(props) {
        const entityValue = props[entityName];
        const [result, promise, state] = useFreshItem(entityValue, asyncAction);

        if (state.loading) {
            return <div>Nahrávám...</div>;
        }

        if (state.errors) {
            return (
                <div>
                    <h2>Error</h2>
                    <p>{state.errors}</p>
                </div>
            );
        }

        if (result) {
            // Dynamically set the entity name in props
            const wrappedProps = {
                ...props,
                [entityName]: result,
            };

            return <WrappedComponent {...wrappedProps} />;
        }

        return (
            <div>
                <h2>Unexpected Error</h2>
                <p>{state.errors || "Unknown issue occurred."}</p>
            </div>
        );
    }
    LazyComponent.displayName = `Lazy${entityName}Component`;
    return LazyComponent
};