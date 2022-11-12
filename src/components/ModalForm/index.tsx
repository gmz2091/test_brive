import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BoxContainer } from './style';
import { useAppSelector } from '../../redux/store/hooks';
import { Box, Input, TextField } from '@mui/material';
import { useForm } from './hooks/useForm';


interface ModalProps {
    openForm: boolean;
    handleCloseForm: () => void;
}

export default function ModalForm({openForm, handleCloseForm}: ModalProps) {
    const {formik} = useForm()
  const { btnText, title } = useAppSelector((state) => state.modalDataReducer)

  return (
    <div>
      <Modal
        open={openForm}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {/* Form */}
            <form onSubmit={formik.handleSubmit}>
                <Input 
                    name="name"
                    placeholder="Nombre"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <Input 
                    name="phone"
                    placeholder="Telefono"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                <Input
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <Input
                    name="image"
                    type="file"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue("image", event.currentTarget.files![0]);
                    }}
                />
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleCloseForm}>
                        Cancelar
                    </Button>
                    <Button variant="contained" type='submit'>
                        {btnText}
                    </Button>
                </Box>
            </form>
        </BoxContainer>
      </Modal>
    </div>
  );
}