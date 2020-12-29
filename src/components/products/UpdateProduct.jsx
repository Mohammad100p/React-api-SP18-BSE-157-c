import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import ProductService from '../../services/Product';

const UpdateProduct = (props) => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState(0);
    const [pid,setPid] = React.useState(0);
    const [Link,setLink] = React.useState("");
    const id =props.match.params.id;
    React.useEffect(()=>{
        ProductService.getSingleProduct(id).then(data=>{
            setName(data.name);
            setPrice(data.price);
            setPid(data.pid);
            setLink(data.Link);
        })
    },[]);
    return ( <Grid container spacing={3}>
        <Grid item xs={12}>
            <h1>Update Existing Product</h1>
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={6}>
            <TextField id="standard-basic" label="link" fullWidth value={Link} onChange={(e=>{setLink(e.target.value)})}/>
            <TextField id="standard-basic" label="name" fullWidth value={name} onChange={(e=>{setName(e.target.value)})}/>
            <TextField id="standard-basic" label="price" fullWidth value={price} onChange={(e=>{setPrice(e.target.value)})}/>
            <TextField id="standard-basic" label="pid" fullWidth value={pid} onChange={(e=>{setPid(e.target.value)})}/> 
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={9}>
            <Button variant="contained" color="primary" onClick={e=>{
            ProductService.updateProduct(id,{Link,name,price,pid}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }}>Update Product</Button>
        </Grid>
    </Grid> );
}
 
export default UpdateProduct;