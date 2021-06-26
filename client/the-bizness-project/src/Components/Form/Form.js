import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Chip, Avatar, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { createBizness, updateBizness } from '../../actions/biznessesAction';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive'

const Form = ({ currentId, setcurrentId, setFormActive }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bizness = useSelector((state) => currentId ? state.biznessesReducers.find((biz) => biz._id === currentId) : null);
    const isResponsive = useMediaQuery({ query: '(max-width: 900px)' })
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (bizness) {
            setBiznessData(bizness);
            setProductData(bizness.products);
        };
    }, [bizness])

    const newProduct = { name: '', price: '', photo: '', };

    const [productData, setProductData] = useState([{ ...newProduct }])

    const [submitText, setSubmitText] = useState('Save')
    const [obscureAddText, setObscureAddText] = useState(false)
    const [obscureSubmitText, setObscureSubmitText] = useState(false)

    const [biznessData, setBiznessData] = useState({
        contact: '',
        name: '',
        description: '',
        tags: '',
        logo: '',
        products: [],
    });

    const addProduct = () => {
        setProductData([...productData, { ...newProduct }]);
    };

    const handleProductPhotoChange = (idx, data64) => {
        const updatedProducts = [...productData];
        updatedProducts[idx]['photo'] = data64;
        setProductData(updatedProducts);
    };

    const handleProductChange = (e) => {
        const updatedProducts = [...productData];
        updatedProducts[e.target.dataset.idx][e.target.className] = e.target.value;
        setProductData(updatedProducts);
    };

    var tagsArray = biznessData.tags.split(',');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData);
        setBiznessData({ ...biznessData, products: productData });
        if (biznessData.tags.split(',').length <= 5 &&
            biznessData.contact !== '' &&
            biznessData.name !== '' &&
            biznessData.description !== '' &&
            biznessData.tags !== '') {
            console.log(biznessData);
            if (submitText === 'Save') {
                toast.info('Business Data Saved! Press submit now!');
                setSubmitText('Submit');
                setObscureAddText(true);
            } else {
                if (currentId) {
                    dispatch(updateBizness(currentId, { ...biznessData, ownerName: user?.result?.name }))
                    toast.success('Business Updated!');
                    setObscureSubmitText(true);
                    setFormActive(false);
                } else {
                    dispatch(createBizness({ ...biznessData, ownerName: user?.result?.name }))
                    toast.success('Business Created!');
                    setObscureSubmitText(true);
                    setFormActive(false);
                }
                clear();
            }
        } else { toast.error('Fill in all the fields! Create only upto 5 tags!') }
    }

    const clear = () => {
        console.log('cleared');
        setcurrentId(null);
        setBiznessData({
            contact: '',
            name: '',
            description: '',
            tags: '',
            logo: '',
            products: []
        });
        setProductData([{ name: '', price: '', photo: '', }]);
        setObscureAddText(false);
        setObscureSubmitText(false);
    };

    const inputStyles = {
        padding: '0.5rem',
        marginRight: isResponsive ? '0' : '1rem',
        marginBottom: isResponsive ? '0.5rem' : '0'
    }

    if (!user?.result?.name) {
        return (
            <div style={{ margin: '15rem auto', width: isResponsive ? '90vw' : '50vw' }}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" align="center">
                        Please Sign In to create and edit your business!
                    </Typography>
                </Paper>
            </div>
        );
    }

    return (
        <div style={{ margin: '2rem auto', width: isResponsive ? '90vw' : '50vw' }}>
            <ToastContainer />
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                    <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ margin: '0 1rem' }}>
                            <Avatar alt="Logo" src={biznessData.logo} />
                        </div>
                        <Typography variant="h6">{currentId ? 'EDIT' : 'CREATE'} YOUR BUSINESS</Typography>
                    </div>
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
                    <TextField name="contact" variant="outlined" fullWidth label="Contact" size="small" value={biznessData.contact} required onChange={(e) => setBiznessData({ ...biznessData, contact: e.target.value })}></TextField>
                    <div className={classes.fileInput}><FileBase type="file" required multiple={false} onDone={({ base64 }) => setBiznessData({ ...biznessData, logo: base64 })}></FileBase></div>

                    {
                        productData.map((val, idx) => {
                            const productNameId = `name-${idx}`;
                            const productPriceId = `price-${idx}`;
                            return (
                                <div key={`Product-${idx}`} style={{ width: '100%', height: '100%', margin: '0.5rem auto', backgroundColor: '#DEF2C8', padding: '0.5rem', display: 'flex', flexDirection: isResponsive ? 'column' : 'row' }}>
                                    <input
                                        type="text"
                                        name={productNameId}
                                        data-idx={idx}
                                        id={productNameId}
                                        className="name"
                                        placeholder={`Product ${idx + 1}`}
                                        size="small"
                                        onChange={handleProductChange}
                                        style={inputStyles}
                                        value={productData[idx].name}
                                    />
                                    <input
                                        type="number"
                                        name={productPriceId}
                                        data-idx={idx}
                                        id={productPriceId}
                                        className="price"
                                        placeholder="Price in Rs."
                                        onChange={handleProductChange}
                                        style={inputStyles}
                                        value={productData[idx].price}
                                    />
                                    <div className={classes.fileInput}><FileBase type="file" className="photo" multiple={false} onDone={({ base64 }) => handleProductPhotoChange(idx, base64)}></FileBase></div>
                                    {isResponsive ? null : <Avatar alt="Logo" src={productData[idx]['photo']} />}
                                </div>
                            );
                        })
                    }

                    <Button className={classes.buttonSubmit} color="primary" variant="outlined" size="small" onClick={addProduct} fullWidth disabled={obscureAddText}>Add Product</Button>
                    <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth disabled={obscureSubmitText}>{submitText}</Button>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Button color="secondary" variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
                        <Button color="secondary" variant="contained" size="small" fullWidth onClick={() => setFormActive(false)}>Go Back!</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default Form
