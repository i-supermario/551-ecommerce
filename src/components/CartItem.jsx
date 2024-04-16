import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";

export default function CartItem({item}){

    const { name,description,price,company } = item

    const {cart}  = useCart()


    useEffect(()=>{
        const item = cart.filter(it => it.name==name)
        console.log(item)
    },[])

    return(
        <>
            <Card>
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
                <Typography>Item Count: {item.count}</Typography>
                </CardActions>
            </Card>
        </>
    )

}