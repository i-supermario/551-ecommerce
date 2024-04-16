import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';


export default function Medicine({item}) {

    const { name,description,price,company,image_URL } = item
    const [count,setCount] = useState(0)
    const {cart,updateCartItem}  = useCart()

    console.log('REFRESH', count)

    useEffect(()=>{
        const item = cart.filter(it => it.name==name)
        console.log(item)
        setCount(item.count ? item.count : 0)
    },[])


    return (
        <Card 
            sx={{ maxWidth: '350px', height:'400px', paddingBottom:'10px'}} 
        >
            <CardMedia
                sx={{ height: '140px' }}
                image={image_URL}
                title={name}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" >
                {name}
                </Typography>
                <Typography gutterBottom variant="subtitle1" >
                {company}
                </Typography>
                <Box height={'5rem'}  >
                    <Typography variant="p" textOverflow='ellipsis' >
                    {description}
                    </Typography>
                </Box>
                <Typography gutterBottom>Price: {price}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>{
                    updateCartItem({...item,count: count + 1},'ADD')
                    setCount(count + 1)
                }}>
                    Add
                </Button>
                <Typography>{count}</Typography>
                {
                    count > 0 ?
                    <Button onClick={()=>{
                        updateCartItem({...item,count: count-1},'REMOVE')
                        setCount(count -1)
                    }}>
                        Remove
                    </Button>
                    :
                    <></>
                }
            </CardActions>
            <Typography>
                {name}
            </Typography>
        </Card>
    );
}