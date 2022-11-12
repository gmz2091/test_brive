import { User } from '../../interfaces/user.interface'
import { getUsers, newUsers, deleteUsers } from '../../services/userService'
import { userConstants } from '../constants'

export const getUsersActions = () => async (dispatch: any) => {
  dispatch({
    type: userConstants.GET_USER_REQUEST
  })
  try {
    const response = await getUsers()
    dispatch({
      type: userConstants.GET_USER_SUCCESS,
      payload: response
    })
  } catch (err: any) {
    dispatch({
      type: userConstants.GET_USER_FAILURE,
      payload: err.message
    })
    throw err
  }
}
export const deleteUsersActions = (id : string) => async (dispatch: any) => {
  dispatch({
    type: userConstants.DELETE_USER_REQUEST
  })
  try {
    const response = await deleteUsers(id)
    dispatch({
      type: userConstants.DELETE_USER_SUCCESS,
      payload: response
    })
  } catch (err: any) {
    dispatch({
      type: userConstants.DELETE_USER_FAILURE,
      payload: err.message
    })
    throw err
  }
}

export const newUsersActions = (data: User) => async (dispatch: any) => {
  dispatch({
    type: userConstants.CREATE_USER_REQUEST
  })
  try {
    const response = await  newUsers(data)
    dispatch({
      type: userConstants.CREATE_USER_SUCCESS,
      payload: response
    })
  } catch (err: any) {
    dispatch({
      type: userConstants.CREATE_USER_FAILURE,
      payload: err.message
    })
    throw err
  }
}
