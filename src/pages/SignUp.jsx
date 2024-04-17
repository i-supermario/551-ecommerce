import  { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import {  useNavigate } from 'react-router-dom';

export default function Signup(){
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        type:'CUSTOMER'
    });

    const navigate = useNavigate()

    const { SignIn } = useUser()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <Container sx={{
            minWidth:'100vw',
            minHeight:'100vh',
            display:'flex',
            justifyContent:'center',
            padding:'50px',
            backgroundColor:'white'
        }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column'
                }}>
                <Typography variant="h4" align="center">Signup Form</Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-around'
                    }}>
                        <Button variant="contained" color="primary" onClick={()=>{
                            SignIn(formData).then(()=>{
                                console.log('Signed Up Successfully')
                                navigate('/')
                            })
                        }}>
                            Signup
                        </Button>
                        <Button variant="contained" color="primary" onClick={()=>navigate('/')}>
                            Login
                        </Button>
                    </Box>
            </Box>
        </Container>
    );
}

