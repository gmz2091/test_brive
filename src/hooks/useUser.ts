import { useEffect } from 'react'
import { getUsersActions } from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'

export default function useUser() {
  const dispatch = useAppDispatch()
  const { data, loading } = useAppSelector((state) => state.getUserReducer)
  const { success } = useAppSelector((state) => state.deleteUserReducer)
  const { success: successCreate } = useAppSelector((state) => state.createUserReducer)

  useEffect(() => {
    dispatch(getUsersActions())
  }, [dispatch, success, successCreate])

  return {
    data,
    loading
  }
}
