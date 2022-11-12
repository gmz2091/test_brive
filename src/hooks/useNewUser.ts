import { User } from '../interfaces/user.interface'
import { newUsersActions } from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/store/hooks'

export default function useNewUser() {
  const dispatch = useAppDispatch()
  const { data: dataUsr, loading } = useAppSelector((state) => state.getUserReducer)

  const newUser = (data: User) => {
    dispatch(newUsersActions(data))
  }
  

  return {
    dataUsr,
    loading,
    newUser
  }
}
