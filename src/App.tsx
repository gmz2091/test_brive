import { Box } from '@mui/material';
import React, { useState} from 'react';
import {UserItem} from './components';
import {ModalView, ModalForm} from './components';
import useUser from './hooks/useUser';
import { User } from './interfaces/user.interface';

function App() {
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
      {data.length === 0 && !loading && <p>No users found</p>}
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
