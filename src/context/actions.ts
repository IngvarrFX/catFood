export const actions = {
    TOGGLE_SELECTED_ITEM: "TOGGLE_SELECTED_ITEM",
};

export type ToggleSelectedItemType = {
    type: typeof actions.TOGGLE_SELECTED_ITEM
    itemId: string
    isSelected: boolean
}

export const toggleSelectedItem = (itemId: string, isSelected: boolean): ToggleSelectedItemType => {
    return {type: actions.TOGGLE_SELECTED_ITEM, itemId, isSelected}
}
