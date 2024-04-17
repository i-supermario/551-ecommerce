import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useUser } from '../contexts/UserContext';

function Header() {

  const { user } = useUser()
  const { email, name } = user

  return (
      <Container 
        disableGutters
        sx={{
            minWidth:'100%',
            display:'flex',
            justifyContent:'space-between',
            paddingX:'10px',
            borderBottom:'solid 0.1rem yellow'
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            padding:'10px',
            rowGap:'5px',
            color:'crimson'
          }} >
            <Typography>User: {name}</Typography>
            <Typography>Email: {email}</Typography>
          </Box>
          <Box sx={{
            display:'flex',
            columnGap: '20px',
            paddingY:'20px'

          }} >
            <Link to={'/dashboard'} >Dashboard</Link>
            <Link to={'/login'} > Login</Link>
          </Box>
      </Container>            
  )
}
export default Header;
