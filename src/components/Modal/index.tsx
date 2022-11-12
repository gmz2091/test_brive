import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BoxContainer } from './style';
import { useAppSelector } from '../../redux/store/hooks';
import { Box } from '@mui/material';


interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

export default function ModalView({open, handleClose}: ModalProps) {
  const { btnText, title, btnActionFn, addUser } = useAppSelector((state) => state.modalDataReducer)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={() => btnActionFn()}>
            {btnText}
          </Button>
        </Box>
        </BoxContainer>
      </Modal>
    </div>
  );
}