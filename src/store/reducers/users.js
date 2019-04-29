import axios from 'axios';

const initialState = {
  all: [],
  single: {},
  current: {}
};

const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_CURRENT_USER = 'GET_CURRENT_USER'
const GET_USER = 'GET_USER'
const LOG_OUT_USER = 'LOG_OUT_USER'

const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

const getUser = user => ({
  type: GET_USER,
  user
})

const getCurrentUser = user => ({
  type: GET_CURRENT_USER,
  user
})

const logOutUser = () => ({
  type: LOG_OUT_USER
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
    dispatch(getCurrentUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const register = formData => async (dispatch) => {
  try {
    const {data} = await axios.post('/auth/register', formData)
    dispatch(getCurrentUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const login = formData => async (dispatch) => {
  try {
    const {data} = await axios.put('/auth/login', formData)
    dispatch(getCurrentUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axios.post('/auth/logout')
    dispatch(logOutUser())
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
    case GET_CURRENT_USER:
      return {
        ...state,
        current: action.user
      }
    case GET_USER:
      return {
        ...state,
        single: action.user
      }
    case LOG_OUT_USER:
      return {
        ...state,
        current: {}
      }
    default:
      return state;
  }
};

export default userReducer;
