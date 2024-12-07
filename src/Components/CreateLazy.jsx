import React, { useEffect, useRef, useState } from "react";
import { useFreshItem } from "../Hooks";
import { useDispatch, useSelector } from "react-redux";
import { CreateAsyncActionFromQuery } from "../Queries";

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

/**
 * Higher-Order Component to:
 * 1. Lazily fetch data when the component becomes visible in the viewport.
 * 2. Render the wrapped component only after data is fetched.
 *
 * @param {React.ComponentType} WrappedComponent - The component to wrap.
 * @param {string} entityName - The name of the entity prop.
 * @param {Function} asyncAction - The async Redux action to fetch the entity.
 * @returns {React.ComponentType} A wrapped component with both lazy loading and lazy data fetching.
 */
export const createDefferedComponentWithLazyLoading = (WrappedComponent, entityName, asyncAction) => {
    let _asyncAction = asyncAction
    if (typeof param === "string") {
        _asyncAction = CreateAsyncActionFromQuery(asyncAction)
    } else if (typeof param === "function") {
        // console.log("The parameter is a function.");
    } else {
        console.log("The parameter is neither a string nor a function.");
    }
    function LazyComponent(props) {
        // const [isVisible, setIsVisible] = useState(false);
        // const [data, setData] = useState(null);
        // const [loading, setLoading] = useState(false);
        // const [error, setError] = useState(null);
        const containerRef = useRef(null);
        const dispatch = useDispatch();

        const entityValue = props[entityName];
        const {id, ...queryVariables} = entityValue
        if (!entityValue) {
            throw Error("Component miss props key: " + entityName)
        }

        const [_state, _setState] = useState({
            visible: false,
            errors: null,
            loading: false,
            done: false
        })

        const items = useSelector(state => state["items"])
        if (!items) {
            throw Error("bad use of store and useFreshItem hook, checks that store state has items attribute")
        }
        const storedItem = items[entityValue?.id]

        // Intersection Observer to track visibility
        useEffect(() => {
            if (!_state.visible) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            _setState({..._state, visible: true});
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.1 }
                );
    
                if (containerRef.current) {
                    observer.observe(containerRef.current);
                }
    
                return () => observer.disconnect();
            }
        }, [_state]);

        // Fetch data when the component becomes visible
        useEffect(() => {
            if (_state.visible && !_state.loading && !_state.done) {
                const fetcher = async () => {
                    let dispatchResult = null
                    try {
                        dispatchResult = await dispatch(_asyncAction({id, ...queryVariables}), null)
                        const {errors} = dispatchResult
                        // console.log(`finished load ${id}`, dispatchResult)
                        _setState({..._state, loading: false, done: true, errors: errors});   
                        
                    }
                    catch (errors) {
                        console.log(`finished load errors ${id}`, dispatchResult)
                        _setState({..._state, loading: false, done: true, errors: errors});   
                        
                    }
                    return dispatchResult                    
                }
                fetcher()
                _setState({..._state, loading: true});
                // console.log(`going to load ${id}`)
            }
        }, [_state, id, dispatch]);

        // console.log(`1. state ${id}`, _state)
        // console.log(`from store ${id}`, storedItem)
        // Render when not visible
        if (!_state.visible) {
            return <div ref={containerRef} style={{ height: "100vh" }} />;
        }
        // console.log(`2. state ${id}`, _state)
        // Render loading state
        if (_state.loading) {
            return (
                <div
                    ref={containerRef}
                    style={{
                        height: "100vh",
                        borderColor: "#2196F3",
                        borderLeft: "6px solid #ccc",
                    }}
                >
                    Nahrávám...
                </div>
            );
        }
        // console.log(`3. state ${id}`, _state)
        // Render error state
        if (_state.errors) {
            return (
                <div ref={containerRef}>
                    <h2>Error</h2>
                    <p>{JSON.stringify(_state.errors, null, 4)}</p>
                </div>
            );
        }
        // console.log(`4. state ${id}`, _state)
        // Render the wrapped component with fetched data
        if (_state.done) {
            const wrappedProps = {
                ...props,
                [entityName]: storedItem,
            };

            return (
                <div ref={containerRef}>
                    <WrappedComponent {...wrappedProps} />
                </div>
            );
        }
        // console.log(`5. state ${id}`, _state)
        // Render fallback for unexpected states
        return (
            <div ref={containerRef}>
                <h2>Unexpected Error</h2>
                <p>Unknown issue occurred.</p>
            </div>
        );
        
    }

    LazyComponent.displayName = `Deffered${entityName}ComponentWithLazyDataFetching`;
    return LazyComponent;
};