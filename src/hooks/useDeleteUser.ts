import { deleteUsersActions } from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'

export default function useDeleteUser() {
  const dispatch = useAppDispatch()
  const { data, loading } = useAppSelector((state) => state.deleteUserReducer)
  

  const deleteUser = (id: string) => {
    dispatch(deleteUsersActions(id))
  }
  

  return {
    data,
    loading,
    deleteUser
  }
}
