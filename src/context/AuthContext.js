
//we call dispatch when we need to uptdate our state
/*
import createDataContext from "./createDataContext"
import * as RootNavigation from "../navigation/RootNavigation"

const authReducer = (state, action) => {
    switch(action.type){

       
        case "add_error": 
            return { ...state, errorMessage:action.payload}
        

        case "signup" : 
            return { errorMessage: "", token: action.payload}
        

        case "signin": 
            return { errorMessage: "", token: action.payload}
        

        case "signout":
            return { token: null, errorMessage:"" }
        

        case "clear_error_message": 
            return { ...state, errorMessage:""}
 
        default:
            return state
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token")

        if(token){
            dispatch({ type: "signin", payload: token})
            RootNavigation.navigate("HomeApp")
        } else {
            RootNavigation.navigate("SignupScreen")
        }
    }
}


export const {Provider, Context } = createDataContext(
    authReducer,
    { tryLocalSignin },
    {}
)*/