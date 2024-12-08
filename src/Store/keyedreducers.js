import { createSlice } from '@reduxjs/toolkit';

/**
 * Shared module.
 * @module shared
 */


/**
 * Stavova funkce nad dict, pridava prvek
 * @param {*} state 
 * @param {*} action 
 * @returns updated state
 */
export const CreateItem = (state, action) => {
    const item = action.payload;
    const id = item['id'] || crypto.randomUUID()
    if (!item['id']) {
        item['id'] = id
    }
    
    state[id] = item
    return state
}

/**
 * Stavova funkce nad dict, maze prvek
 * @param {*} state 
 * @param {*} action 
 * @returns updated state
 */
export const DeleteItem = (state, action) => {
    const item = action.payload;
    delete state[item.id]

    return state
}

/**
 * Stavova funkce nad dict, dela replace
 * @param {*} state 
 * @param {*} action 
 * @returns updated state
 */
export const ReplaceItem = (state, action) => {
    const newItem = action.payload;
    state[newItem.id] = newItem

    return state
}

/**
 * Stavova funkce nad dict, dela update
 * @param {*} state 
 * @param {*} action 
 * @returns updated state
 */
export const UpdateItem = (state, action) => {
    // console.log("UpdateItem", action)
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    
    return state
}    

/**
 * Updates a sub-array attribute (vector) of an item in the state. If the sub-array members have a `__typename` attribute,
 * they are also merged into the state (useful for storing nested entities in a normalized store).
 *
 * @param {Object} state - The current state, typically a normalized object with items indexed by their IDs.
 * @param {Object} action - The action containing the item to update and the vector to modify.
 * @param {Object} action.payload - The payload of the action.
 * @param {Object} action.payload.item - The item containing the sub-array to be updated.
 * @param {string} action.payload.vectorname - The name of the vector (sub-array attribute) to update.
 * @returns {Object} The updated state with the modified vector and any new or updated sub-items.
 *
 * @example
 * const state = {
 *   1: { id: 1, name: "Item 1", events: [{ id: 101 }, { id: 102 }] },
 *   101: { id: 101, name: "Event 1" },
 *   102: { id: 102, name: "Event 2" }
 * };
 *
 * const action = {
 *   payload: {
 *     item: {
 *       id: 1,
 *       events: [
 *         { id: 101, name: "Updated Event 1" },
 *         { id: 103, name: "New Event 3", __typename: "Event" }
 *       ]
 *     },
 *     vectorname: "events"
 *   }
 * };
 *
 * const newState = UpdateSubVector(state, action);
 *
 * console.log(newState);
 * // {
 * //   1: { id: 1, name: "Item 1", events: [{ id: 101, name: "Updated Event 1" }, { id: 102, name: "Event 2" }, { id: 103, name: "New Event 3" }] },
 * //   101: { id: 101, name: "Updated Event 1" },
 * //   102: { id: 102, name: "Event 2" },
 * //   103: { id: 103, name: "New Event 3", __typename: "Event" }
 * // }
 */
export const UpdateSubVector = (state, action) => {
    const { item, vectorname } = action.payload;
    const oldItem = state[item.id];
    const subItems = vectorname in oldItem ? oldItem[vectorname] : [];
    const indexedSubItems = {};

    // Index existing sub-items by their IDs
    for (let i of subItems) {
        indexedSubItems[i.id] = i;
    }

    // Log the update process
    console.log("UpdateSubVector - Updating vector:", vectorname);
    console.log("UpdateSubVector - Incoming item:", item);

    // Update or add sub-items
    for (let i of item[vectorname]) {
        if (i?.__typename) {
            // Update or merge sub-item into the main state if it has a `__typename`
            state[i.id] = { ...state[i.id], ...i };
        }

        // Update or add to the indexed sub-items
        const existing = indexedSubItems[i.id] || {};
        indexedSubItems[i.id] = { ...existing, ...i };
    }

    // Update the vector in the main item
    oldItem[vectorname] = Object.values(indexedSubItems);

    return state;
};


/**
 * Update the scalar attribute of item
 * @param {*} state 
 * @param {} action 
 * @returns updated state
 */
export const UpdateSubScalar = (state, action) => {
    const { item, scalarname } = action.payload
    const oldItem = state[item.id]
    const newSubitem = item[scalarname]
    oldItem[scalarname] = {...oldItem[scalarname], ...newSubitem}
    if (newSubitem?.__typename) {
        //je to polozka, ktera muze byt hlavni, napr. user.events, kazdy event muze byt ve store
        state[newSubitem.id] = {...state[newSubitem.id], ...newSubitem}
    }
    return state
}


const item_add = CreateItem
const item_update = UpdateItem
const item_replace = ReplaceItem
const item_delete = DeleteItem
const item_updateAttributeScalar = UpdateSubScalar
const item_updateAttributeVector = UpdateSubVector


export const ItemSlice = createSlice({
    name: 'items',
    initialState: {},
    reducers: {
        item_add,
        item_update,
        item_replace,
        item_delete,

        item_updateAttributeScalar,
        item_updateAttributeVector,
    } 
})

// export const ItemSlice = createSlice({
//     name: 'items',
//     initialState: {},
//     reducers: {
//         item_add: CreateItem,
//         item_update: UpdateItem,
//         item_replace: ReplaceItem,
//         item_delete: DeleteItem,

//         item_updateAttributeScalar: UpdateSubScalar,
//         item_updateAttributeVector: UpdateSubVector,
//     } 
// })
export const ItemReducer = ItemSlice.reducer
export const ItemActions = ItemSlice.actions

// const All = { 
//     CreateItem, UpdateItem, ReplaceItem, DeleteItem, 
//     UpdateSubVector, UpdateSubScalar, 
//     ItemSliceReducer: ItemSlice.reducer, ItemSliceActions: ItemSlice.actions
// }
// export default All