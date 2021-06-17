import React, { useState } from 'react';
import { TextField, Paper, Button, Typography, Chip, Avatar } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const classes = useStyles();

    const [biznessData, setBiznessData] = useState({
        owner: '',
        contact: '',
        name: '',
        description: '',
        tags: '',
        logo: '',
        products: [],
    });

    const newProduct = { name: '', price: 0, photo: '', };

    const [productData, setProductData] = useState([{...newProduct}])

    const addProduct = () => {
        setProductData([...productData, {...newProduct}]);
      };

    const handleProductChange = (e) => {
        const updatedProducts = [...productData];
        updatedProducts[e.target.dataset.idx][e.target.className] = e.target.value;
        setProductData(updatedProducts);
    };  

    var tagsArray = biznessData.tags.split(',');

    const handleSubmit = (e) => {
        e.preventDefault();
        setBiznessData({ ...biznessData, products: productData });
        if (biznessData.tags.split(',').length > 5) { toast.error('Only 5 tags are allowed! ') }
        if (biznessData.owner !== '' &&
            biznessData.contact !== '' &&
            biznessData.name !== '' &&
            biznessData.description !== '' &&
            biznessData.tags !== '') {
            console.log(biznessData);
        } else { toast.error('Fill in all the fields! ') }
    }

    const clear = () => {
        console.log('cleared');
        setBiznessData({
            owner: '',
            contact: '',
            name: '',
            description: '',
            tags: '',
            logo: '',
        });
    };

    return (
        <div style={{ width: '30%' }}>
            <ToastContainer />
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                    <Typography variant="h6">Creating Your Business</Typography>
                    <TextField name="name" variant="outlined" fullWidth label="Name" size="small" value={biznessData.name} required onChange={(e) => setBiznessData({ ...biznessData, name: e.target.value })}></TextField>
                    <TextField name="description" variant="outlined" fullWidth label="Description" size="small" value={biznessData.description} required onChange={(e) => setBiznessData({ ...biznessData, description: e.target.value })}></TextField>
                    <TextField name="tags" variant="outlined" fullWidth label="Tags (comma separated)" size="small" value={biznessData.tags} required onChange={(e) => setBiznessData({ ...biznessData, tags: e.target.value })}></TextField>
                    {tagsArray[0] !== '' ? tagsArray.map((data) => {
                        return (
                            <Chip
                                className={classes.chip}
                                avatar={<Avatar>{data[0]}</Avatar>}
                                label={data}
                                color="secondary"
                            />
                        );
                    }) : null}
                    <TextField name="owner" variant="outlined" fullWidth label="Owner" size="small" value={biznessData.owner} required onChange={(e) => setBiznessData({ ...biznessData, owner: e.target.value })}></TextField>
                    <TextField name="contact" variant="outlined" fullWidth label="Contact" size="small" value={biznessData.contact} required onChange={(e) => setBiznessData({ ...biznessData, contact: e.target.value })}></TextField>
                    <div className={classes.fileInput}><FileBase type="file" required multiple={false} onDone={({ base64 }) => setBiznessData({ ...biznessData, logo: base64 })}></FileBase></div>

                    <Typography variant="h6">Your Products</Typography>
                    {/* <TextField name="productName" fullWidth variant="outlined" label="Product Name" size="small" required></TextField>
                    <TextField name="productPrice" variant="outlined" label="Product Price in Rs." size="small" required type="number" fullWidth></TextField>
                    <div className={classes.fileInput}><FileBase type="file" required multiple={false}></FileBase></div> */}

                    {
                        productData.map((val, idx) => {
                            const productNameId = `name-${idx}`;
                            const productPriceId = `price-${idx}`;
                            return (
                                <div key={`Product-${idx}`} style={{width: '100%', height: '100%'}}>
                                    <input
                                        type="text"
                                        name={productNameId}
                                        data-idx={idx}
                                        id={productNameId}
                                        className="name"
                                        placeholder={`Product ${idx + 1}`}
                                        size="small"
                                        onChange={handleProductChange}
                                    />
                                    <input
                                        type="number"
                                        name={productPriceId}
                                        data-idx={idx}
                                        id={productPriceId}
                                        className="price"
                                        placeholder="Price in Rs."
                                        onChange={handleProductChange}
                                    />
                                    <div className={classes.fileInput}><FileBase type="file" className="photo" multiple={false} onDone={({ base64 }) => console.log(base64)}></FileBase></div>
                                </div>
                            );
                        })
                    }

                    <Button color="primary" fullWidth onClick={addProduct}>Add Product</Button>
                    <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth >Submit</Button>
                    <Button color="secondary" variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>

            </Paper>
        </div>
    )
}

export default Form
