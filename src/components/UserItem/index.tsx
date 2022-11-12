import React from 'react'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ContainerItem, ContainerImg, ContainerInfo, ContainerActions } from './style'
import { useAppDispatch } from '../../redux/store/hooks';
import { setModalData } from '../../redux/reducers/modalDataReducer';
import useDeleteUser from '../../hooks/useDeleteUser';

interface UserItemProps {
    name: string;
    phone: string;
    email: string;
    image: string;
    id: string;
    handleOpen: () => void;
    handleOpenForm: () => void;
}

const UserItem = ({name, phone, email, handleOpen, handleOpenForm, id}: UserItemProps) => {
  const {deleteUser} = useDeleteUser()
  const dispatch = useAppDispatch()
  return (
    <ContainerItem>
        <ContainerImg>
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="avatar" />
        </ContainerImg>
        <ContainerInfo>
          <Typography variant="h6" component="h2">
            Nombre: {name || 'Jhon Doe'}
          </Typography>
          <Typography variant="h6" component="h2">
            Telefono: {phone || '123456789' }
          </Typography>
          <Typography variant="h6" component="h2">
            Email: {email || 'jhon@mail.com'}
          </Typography>
        </ContainerInfo>
        <ContainerActions>
          <IconButton onClick={() => {
            dispatch(setModalData({
              title: 'Agregar usuario',
              btnText: 'Agregar',
              addUser: true,
            }))
            handleOpenForm()
            }} aria-label="person-add" color="primary">
            <PersonAddIcon />
          </IconButton>
          <IconButton onClick={() => {
            dispatch(setModalData({
              title: 'Eliminar usuario',
              btnText: 'Eliminar',
              btnActionFn: () => deleteUser(id),
            }))
            handleOpen()
            }} aria-label="delete" color="primary">
            <PersonRemoveIcon />
          </IconButton>
        </ContainerActions>
    </ContainerItem>

  )
}

export default UserItem