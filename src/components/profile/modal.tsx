import React from 'react';
import { Button, Modal as MuiModal, Box, TextField } from '@mui/material';
import { User, updateProfile } from 'firebase/auth';

interface ModalProps {
  user: User;
}


const Modal: React.FC<ModalProps> = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = React.useState(user.displayName || '');
  const [img,setImg]=React.useState(user.photoURL || '')

const changeImg=(event: React.ChangeEvent<HTMLInputElement>)=>{
setImg(event.target.value)
}

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const save = () => {
    if (user && typeof user.getIdToken === 'function') {
      updateProfile(user, { displayName: input,photoURL:img})
        .then(() => {
          localStorage.setItem('user', JSON.stringify({ ...user, displayName: input,photoURL:img}));
          handleClose();
        })
        .catch((error) => {
          console.error('Ошибка при обновлении профиля:', error);
        });
    } else {
      console.error('Пользователь не инициализирован или неверный тип');
    }
  };
  

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="text"
        sx={{ marginLeft: "22px", color: "black", backgroundColor: '#d7dbdd' }}
      >
        Customize Profile
      </Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            bgcolor: 'var(--background-color)',
            border: '1px solid var(--color)',
            boxShadow: 24,
            p: 4,
            color: "var(--color)",
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
        
            <img
              src={img}
              alt="Profile"
              style={{ borderRadius: "50%", width: 150,margin:'20px'}}
            />
             <TextField
            id="outlined-basic"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={{margin:"20px"}}
            label="input img url"
            onChange={changeImg}
          />

       
          <TextField
            id="outlined-basic"
            value={input}
            onChange={handleInputChange}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <Button
            sx={{ margin: "30px" }}
            fullWidth
            variant="contained"
            color="success"
            onClick={save}
          >
            Save
          </Button>
        </Box>
      </MuiModal>
    </div>
  );
};

export default Modal;
