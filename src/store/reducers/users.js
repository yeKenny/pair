import axios from 'axios';

const initialState = {
  all: [],
  single: {}
};

const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_USER = 'GET_USER'

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

const getUser = user => ({
  type: GET_USER,
  user
})

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(getAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchUser = userId => async (dispatch) => {
  try {
    const id = Number(userId)
    const {data} = await axios.get(`/api/users/${id}`)
    dispatch(getUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const getMe = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/auth/me')
    dispatch(getUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const login = formData => async (dispatch) => {
  try {
    const {data} = await axios.put('/auth/login', formData)
    dispatch(getUser(data))
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
    case GET_USER:
      return {
        ...state,
        single: action.user
      }
    default:
      return state;
  }
};

export default userReducer;
