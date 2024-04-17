import { useUser } from "../contexts/UserContext"
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const { Login } = useUser()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        type:'CUSTOMER'
    });

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
                    <Typography variant="h4" align="center" color='black'>Login</Typography>
                    <TextField
                        fullWidth
                        label="Email"
                        name="username"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        color='primary'
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
                        <Button variant="contained" color="primary" onClick={()=>navigate('/signup')}>Sign Up</Button>
                        <Button variant="contained" color="primary"  onClick={()=>{
                            Login(formData).then(()=>{
                                console.log('Logged in Successfully')
                                navigate('/dashboard')
                            })
                        }}>
                            Login
                        </Button>
                    </Box>
                </Box>
        </Container>
    );
}

