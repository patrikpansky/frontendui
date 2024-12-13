import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const mergeArraysById = (array1, array2) => {
    const mergedMap = new Map();

    // Add items from the first array
    array1.forEach((item) => {
        mergedMap.set(item.id, item);
    });

    // Add items from the second array (overwrites if id already exists)
    array2.forEach((item) => {
        mergedMap.set(item.id, item);
    });

    // Convert the Map back to an array
    return Array.from(mergedMap.values());
};

/**
 * A reusable component that provides infinite scrolling functionality.
 * 
 * It dynamically fetches and displays items in pages, loading more items as the user scrolls to the end of the list.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.actionParams - Initial parameters for the async action, including pagination info.
 * @param {number} props.actionParams.skip - Initial skip value for pagination.
 * @param {number} props.actionParams.limit - Number of items to fetch per page.
 * @param {Object} [props.actionParams.otherParams] - Additional parameters to pass to the async action.
 * @param {Function} props.asyncAction - The async Redux action used to fetch data. 
 *   This function must return a promise resolving to an array of fetched items.
 * @param {React.ComponentType} props.Visualiser - A component to visualize the fetched data.
 *   It receives the fetched results as a prop `events`.
 * 
 * @example
 * // Redux action to fetch items
 * const fetchItems = ({ skip, limit }) => async (dispatch) => {
 *   const response = await fetch(`/api/items?skip=${skip}&limit=${limit}`);
 *   const result = await response.json();
 *   return result.items;
 * };
 * 
 * // Visualizer Component
 * const ItemsVisualizer = ({ events }) => (
 *   <ul>
 *     {events.map((item) => (
 *       <li key={item.id}>{item.name}</li>
 *     ))}
 *   </ul>
 * );
 * 
 * // Usage
 * <InfiniteScroll
 *   actionParams={{ skip: 0, limit: 10 }}
 *   asyncAction={fetchItems}
 *   Visualiser={ItemsVisualizer}
 * />
 * 
 * @returns {JSX.Element} The rendered infinite scroll component.
 */
export const InfiniteScroll = ({ 
    preloadedItems=[], 
    actionParams, 
    asyncAction, 
    Visualiser,
    calculateNewFilter = (oldfilter) => ({...oldfilter, skip: oldfilter.skip + oldfilter.limit || 10, limit: oldfilter.limit || 10})
 }) => {
    // const { 
    //     skip=0, 
    //     limit=12, 
    //     ...otherParams 
    // } = actionParams;
    // console.log("actionParams", actionParams)
    const [_state, _setState] = useState({
        filter: {
            ...actionParams
        },
        // skip: skip,
        // limit: limit,
        loading: false,
        hasMore: true,
        errors: null,
        results: preloadedItems
    });

    const containerRef = useRef(null);
    const dispatch = useDispatch();

    // Function to load more items
    const loadItems = async () => {
        if (_state.loading || !_state.hasMore) return;

        _setState({ ..._state, loading: true });
        try {
            const params = _state.filter;
            // console.log("going to fetch more", JSON.stringify(params))
            const fetchedResults = await dispatch(asyncAction(params));
            // console.log("fetchedResults", JSON.stringify(fetchedResults))

            if (fetchedResults.length == 0 ) {
                _setState({
                    ..._state,
                    results: mergeArraysById(_state.results, fetchedResults),
                    // skip: _state.skip + _state.limit,
                    hasMore: false,
                    loading: false
                });
            } else {
                const newfilter = calculateNewFilter(_state.filter)
                _setState({
                    ..._state,
                    filter: newfilter,
                    results: mergeArraysById(_state.results, fetchedResults),
                    // skip: _state.skip + _state.limit,
                    hasMore: true,
                    loading: false
                });
            }
        } catch (error) {
            console.error("Error loading items:", error);
            _setState({
                ..._state, 
                hasMore: false, 
                loading: false, 
                errors: error
            });
        }
    };

    // Intersection Observer to detect when the user scrolls to the bottom
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && _state.hasMore && !_state.loading) {
                    loadItems()
                }
            },
            { threshold: 1.0 }
        );

        const containerRefCurrent = containerRef.current;
        if (containerRefCurrent) {
            observer.observe(containerRefCurrent);
        }

        return () => {
            if (containerRefCurrent) {
                observer.disconnect();
            }
        };
    }, [_state]);

    return (
        <>
            <Visualiser items={_state.results} />
            {/* {JSON.stringify(_state)} */}
            {!_state.hasMore && <div>No more items to load.</div>}
            {_state.errors && <div><h2>Chyba</h2>{JSON.stringify(_state.errors, null, 4)}</div>}
            {_state.loading && <div>Loading more...</div>}
            <div ref={containerRef} style={{ height: "50px" }} />
        </>
    );
};
