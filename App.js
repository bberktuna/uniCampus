import React from 'react'


import {AppNavigator} from "./src/navigation/index"
//REDUX
import {Provider as ReduxProvider} from "react-redux"
import { createStore } from "redux"
import reducers from "./src/redux/reducers/index"



const App = () => {
  return (
    //<ReduxProvider store={createStore(reducers)}>
      <AppNavigator />
   // </ReduxProvider>
  )
}

export default App
