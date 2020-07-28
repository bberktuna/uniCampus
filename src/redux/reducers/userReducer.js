import { USER_EMAIL } from '../actions/actionTypes';

const initialState = {
  user_email: "saawqdqdwdqws",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case USER_EMAIL:{
        return state
    }



    default:
      return state;
  }
};
