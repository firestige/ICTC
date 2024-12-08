import React, { createContext, Dispatch, PropsWithChildren, Reducer, useContext, useMemo, useReducer } from 'react';

export interface GlobalContextState {
  isLogin: boolean;
  isSidebarOpened: boolean;
}

interface GlobalContextProps {
  state: GlobalContextState;
  dispatch: Dispatch<Action>
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);



export type Action = { type: 'openSidebar' } | { type: 'closeSidebar' };

const initialState: GlobalContextState = {
  isLogin: false,
  isSidebarOpened: false,
};

const reducer: Reducer<GlobalContextState, Action> = (state, action) => {
  switch (action.type) {
    case 'openSidebar':
      return { ...state, isSidebarOpened: true };
    case 'closeSidebar':
      return { ...state, isSidebarOpened: false };
    default:
      throw new Error('unknown action type');
  }
};

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("init", initialState)
  console.log(state);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (<GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>);
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  console.log('useGlobalContext', context);
  // if (context === null || undefined) {
  //   throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  // }
  return context;
}