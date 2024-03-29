//we call dispatch when we need to uptdate our state
import createDataContext from "../context/createDataContext"
import uniCampusApi from "../api/index"
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from "../navigation/RootNavigation"

const authReducer = (state, action) => {
    switch(action.type){

        case "add_error": 
            return { ...state, errorMessage: action.payload}
        

        case "signup" : 
            return { errorMessage: "", token: action.payload}
        

        case "signin": 
            return { errorMessage: "", token: action.payload}
        

        case "signout":
            return { token: null, errorMessage:"" }
        

        case "clear_error_message": 
            return { ...state, errorMessage:""}
        
        case "get_userData":{
            return action.payload
        }
        default:
            return state
    }
}

const getUserData = (dispatch) => async({email}) => {
        const token = await AsyncStorage.getItem("token")

        const response = await uniCampusApi.get(`/profile/${id}`, {email})

        dispatch({ type: "get_userData", payload: response.data.token})
    }



const signin = dispatch => async ({email, password}) => {
    try{
        const response = await uniCampusApi.post("/signin", {email, password})
        await AsyncStorage.setItem("token", response.data.token)
        dispatch({type: "signin", payload: response.data.token})

        RootNavigation.navigate("HomeApp")
    }
    catch(err){
        dispatch( { type: "add_error", payload: "Something went wrong with sign up"})
        console.log(err)
    }

}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem("token")
        dispatch({ type: "signout"})
        RootNavigation.navigate("Login")
    }
}


const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token")

        if(token){
            dispatch({ type: "signin", payload: token})
            RootNavigation.navigate("HomeApp")
        } else {
            RootNavigation.navigate("Login")
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch( { type: "clear_error_message" })
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await uniCampusApi.post("/signup", {email, password} )
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type:"signup", payload: response.data.token})
            
            RootNavigation.navigate("Login");
        }
        catch(err){
            dispatch( { type: "add_error", payload: "Something went wrong with sign up"})
            console.log(err)
        }
    }
}






export const {Context, Provider} = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin, getUserData },
    {token: null, errorMessage: "", get_userData:"qweqweqwe" }
)