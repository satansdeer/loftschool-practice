import React, { createContext, useReducer, useContext } from "react"
import { initialState } from "./initialState"
import { itemsReducer, IAppState } from "./itemsReducer"
import { Action } from "./Action"

interface IItemsContext {
  state: IAppState
  dispatch: React.Dispatch<Action>
}

const ItemsContext = createContext<IItemsContext>({} as IItemsContext)

export const useItemsContext = () => {
  return useContext(ItemsContext)
}

export const ItemsContextProvider = ({
  children
}: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState)

  return (
    <ItemsContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemsContext.Provider>
  )
}
