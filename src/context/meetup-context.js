import React, { createContext, useReducer } from 'react'
import { MeetupReducer, initialState } from '../reducers/MeetupReducers';

export const MeetupContext = createContext();
const MeetupProvider = ({children}) => {
  const [state, dispatch] = useReducer(MeetupReducer, initialState);

  console.log(state.meetupsData);
  return (
    <MeetupContext.Provider
    value={{
      state,
      dispatch
    }}
    >
      {children}
    </MeetupContext.Provider>
  )
}

export default MeetupProvider
