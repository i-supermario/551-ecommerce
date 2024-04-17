import {  Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Medicine from "../components/Medicine";
import CartItem from "../components/CartItem";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";



export default function Dashboard(){

    const [products,setProducts] = useState([])
    const {cart}  = useCart()
    const { user } = useUser()
    console.log(user)

    const total = cart.reduce((acc, curr) => acc + (curr.count*curr.price), 0)
    console.log(total)
    


    useEffect(()=>{
        const URL = 'http://localhost:7000/medicines/getAll'
        fetch(URL)
        .then(data => data.json())
        .then(data => setProducts(data))
    },[])

    return(
        <>
            <Container disableGutters maxWidth={'100%'} sx={{
                display:'flex',
                flexDirection:'column',
            }}>
                <Header/>
                <Box sx={{
                    display:'flex',
                    padding:'10px'
                }}>
                    <Box sx={{
                        width:'60%',
                        display:'flex',
                        flexDirection:'column'

                    }} textAlign='center' >
                        <Typography variant='subtitle1' textAlign='center' padding={'5px'} >
                            Product List
                        </Typography>
                        <Grid container maxWidth={'100%'} rowGap={2} >
                        {
                                products?.map(product => 
                                    <>
                                        <Grid item key={`${product._id}`} xs={4}  >
                                            <Medicine item={product}/>
                                        </Grid>
                                    </>
                                )
                            }
                        </Grid>
                    </Box>
                    <Box sx={{
                        width:'40%',
                        display:'flex',
                        flexDirection:'column'

                    }} textAlign='center' >
                        <Typography variant='subtitle1' textAlign='center' padding={'5px'} >
                            Cart
                        </Typography>
                        <Stack spacing={2}>
                            {
                                total == 0 && 
                                <Card>
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" >
                                        Cart Empty
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" >
                                        Add some items
                                        </Typography>
                                    </CardContent>
                                </Card>
                            }
                            {
                                cart.map(item => <CartItem key={item._id} item={item} />)
                            }
                            <Box sx={{
                                backgroundColor:'white',
                                border:'dotted 2px purple',
                                borderRadius:'15px'
                            }} >
                                <Typography variant='h4' color='black' > Cart Total: {total}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    )
}


