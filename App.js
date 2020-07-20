import React from 'react'


import {AppNavigator} from "./src/navigation/index"
//REDUX
import {Provider as ReduxProvider} from "react-redux"
import { createStore } from "redux"
import reducers from "./src/redux/reducers/index"
import { Provider as AuthProvider} from "./src/context/AuthContext"


const App = () => {
  return (
    //<ReduxProvider store={createStore(reducers)}>
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
      
   // </ReduxProvider>
  )
}

export default App
