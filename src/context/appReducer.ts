import {DataType} from "../mockData";
import {ActionsType} from "./types";
import {actions} from "./actions";


export const appReducer = (state: DataType[], action: ActionsType) => {
    switch (action.type) {
        case actions.TOGGLE_SELECTED_ITEM: {
            return state.map((item) => item.id === action.itemId ? {...item, isSelected: !item.isSelected} : item)
        }
        default: {
            return state;
        }
    }
}
