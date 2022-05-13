import React, { FunctionComponent, useReducer, createContext, useContext, useEffect } from 'react';

interface Action {
    type: 'FILTER',
    payload: string,
}

interface State {
    description: string
}

type InitStateType = {
    state: State,
    dispatch?: (x: Action) => void,
}
const initState: State = {
    description: ""
}

export const AppGlobalState = createContext<{
    state: State,
    dispatch: React.Dispatch<Action>,
}>({
    state: initState,
    dispatch: () => null
});

// const AppContext = createContext<{
//     state: InitialStateType;
//     dispatch: React.Dispatch<any>;
// }>({
//     state: initialState,
//     dispatch: () => null
// });

// interface Dispatch {
//     action: Action
// }


const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "FILTER":
            // console.log("action: ", action.payload);
            state = { description: action.payload }

            return state;

        default:
            return state;
    }
}

interface PropsI {
    children: JSX.Element
}
export const AppProvider: FunctionComponent<PropsI> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    // console.log("disp:: ", dispatch);

    useEffect(() => {
        // dispatch({ type: "FILTER", payload: "This is me" });
        // console.log("new state: ", state);

    }, []);

    return (
        <AppGlobalState.Provider value={{ state, dispatch }}>
            {children}
        </AppGlobalState.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(AppGlobalState);

    if (!context) {
        throw new Error("useGlobalState must be use inside AppGlobalState Provider");
    }


    return context;
}