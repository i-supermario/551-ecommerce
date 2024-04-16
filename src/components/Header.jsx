import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Header() {
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
          <AdbIcon sx={{paddingY:'20px'}} />
          <Box paddingY={'20px'}>
            <Link to={'/'} >Dashboard</Link>
          </Box>
      </Container>            
  )
}
export default Header;
