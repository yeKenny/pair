import axios from 'axios';

const initialState = {
  all: []
};

const GET_ALL_USERS = 'GET_ALL_USERS'

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(getAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        all: [...action.users]
      }
    default:
      return state;
  }
};

export default userReducer;
