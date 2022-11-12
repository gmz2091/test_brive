import { Box, IconButton } from '@mui/material';
import React, { useState} from 'react';
import {UserItem} from './components';
import {ModalView, ModalForm} from './components';
import { ContainerActions } from './components/UserItem/style';
import useUser from './hooks/useUser';
import { User } from './interfaces/user.interface';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { setModalData } from './redux/reducers/modalDataReducer';
import { useAppDispatch } from './redux/store/hooks';

function App() {
  const dispatch = useAppDispatch()
  const {data, loading} = useUser();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);


  return (
    <>
    <ModalView open={open} handleClose={handleClose} />
    <ModalForm openForm={openForm} handleCloseForm={handleCloseForm} />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: 375, margin: 'auto', padding: 2 }}>
      {loading && 'Loading...'}
      {data.length === 0 && !loading && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: 375, margin: 'auto', padding: 2 }}>
          <h1>No hay usuarios, agrega nuevo usuario</h1>
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
        </ContainerActions>
        </Box>
      )}
      {loading ? 'Loading...' : data?.map((user: User) => 
        <UserItem 
          key={user.id}
          id={user.id}
          name={user.name} 
          phone={user.phone} 
          email={user.email} 
          image={user.image}
          handleOpen={handleOpen}
          handleOpenForm={handleOpenForm}
        />
        )}
    </Box>
    </>
  );
}

export default App;
