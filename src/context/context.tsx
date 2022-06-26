import React, {createContext, useReducer} from "react";
import {data, DataType} from "../mockData";
import {appReducer} from "./appReducer";

type ContextType = {
    state: DataType[]
    dispatch: React.Dispatch<any>
}

export const AppContext = createContext<ContextType>({state: data, dispatch: () => null});

export const Provider = ({children}: any) => {
    // @ts-ignore
    const [state, dispatch] = useReducer(appReducer, data);

    return (<AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};
