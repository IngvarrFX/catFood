export const actions = {
    TOGGLE_SELECTED_ITEM: "TOGGLE_SELECTED_ITEM",
};

export type ToggleSelectedItemType = {
    type: typeof actions.TOGGLE_SELECTED_ITEM
    itemId: string
}

export const toggleSelectedItem = (itemId: string): ToggleSelectedItemType => {
    return {type: actions.TOGGLE_SELECTED_ITEM, itemId}
}
