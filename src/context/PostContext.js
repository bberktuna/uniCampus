import createDataContext from "../context/createDataContext"
import uniCampusApi from "../api/index"
import * as RootNavigation from "../navigation/RootNavigation"


const postReducer = (state, action) => {
    switch(action.type){
        case "get_post":{
            return action.payload
        }
        /*case "add_blogpost":{
            return [...state, 
                {
                title: action.payload.title,
                content: action.payload.content,
                id: Math.floor(Math.random() * 99999)
            }]
        }*/
        case "delete_post":{
            return (
                state.filter((Post)=> Post.id !== action.payload )
            )
        }
        case "edit_post":{
            return (
                state.map((Post) => {
                    return Post.id === action.payload.id ? action.payload : Post
                })
            )
        }
        default:
            return state
    }

}

const editPost = (dispatch) => {
    return async (id, stringContent, callback) => {
        await uniCampusApi.put(`/api/feed/${id}`, { stringContent })
        dispatch({ type: "edit_post", payload: {id, stringContent}
    })
    //id:id , title:title, content:content
    RootNavigation.navigate("Feed")
    }
   
}

const getPost = (dispatch) => {
    return async () => {
        const response = await uniCampusApi.get("/api/feed")

        dispatch({ type: "get_post", payload: response.data})
        
    }
}

const addPost = (dispatch) => {
    return async (stringContent) => {

        await uniCampusApi.post("/api/feed", { stringContent })
        /*dispatch({ 
            type: "add_blogpost", 
            payload: {title, content}
        })//title:title,content:content*/
        RootNavigation.navigate("Feed")

    }   
}

const deletePost = (dispatch) => {
    return async (id) => {
        await uniCampusApi.delete(`/api/feed${id}`)
        dispatch({
            type: "delete_post", 
            payload: id
        })
    }
}



export const {Context, Provider} = createDataContext(
    postReducer, //our reducer
    {   addPost, 
        deletePost, 
        editPost,
        getPost,

    },// kullanılan fonks
    []//initial state default
)