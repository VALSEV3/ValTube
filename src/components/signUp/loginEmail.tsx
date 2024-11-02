import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FormData } from '../../models/FormData';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';



const LoginEmail = () => {
const navigate=useNavigate()

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const signInWithEmail=async() => {
  try{
const SignIn = await signInWithEmailAndPassword(auth,formData.email,formData.password)
alert('User is loged in')
navigate('/')
localStorage.setItem('user',JSON.stringify(SignIn))
return SignIn
  }
catch(e){
  console.log(e)
  registerWithEmail()
}
  }
  
const registerWithEmail=async()=>{
  try{
const reg=createUserWithEmailAndPassword(auth,formData.email,formData.password)
alert("User Is Created")
navigate('/')
localStorage.setItem('user',JSON.stringify(reg))
return reg
  }
  catch(e){
console.log(e)
  }
}
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    signInWithEmail()
  };

  return(
    <form onSubmit={handleSubmit}>
            <p style={{ textAlign: 'center', fontSize: '20px' }}>or</p>
            <hr />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              style={{ marginTop: '20px' }}
            >
              Log in
            </Button>
          </form>
  )
}

export default LoginEmail