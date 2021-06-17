import React, { useState } from 'react';
import { TextField, Paper, Button, Typography, Chip, Avatar } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    const [biznessData, setBiznessData] = useState({
        owner: '',
        contact: '',
        name: '',
        description: '',
        tags: '',
        logo: '',
    });

    var tagsArray = biznessData.tags.split(',');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(biznessData);
        console.log(tagsArray);
        console.log(tagsArray.length);
        if (tagsArray[0] === ''){
            console.log('empty')
        } else {
            console.log('full')
        }
    };

    const clear = () => {
        console.log('cleared');
    };

    return (
        <div style={{ width: '30%' }}>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                    <Typography variant="h6">Creating Your Business</Typography>
                    <TextField name="name" variant="outlined" fullWidth label="Name" size="small" value={biznessData.name} onChange={(e) => setBiznessData({ ...biznessData, name: e.target.value })}></TextField>
                    <TextField name="description" variant="outlined" fullWidth label="Description" size="small" value={biznessData.description} onChange={(e) => setBiznessData({ ...biznessData, description: e.target.value })}></TextField>
                    <TextField name="tags" variant="outlined" fullWidth label="Tags (comma separated)" size="small" value={biznessData.tags} onChange={(e) => setBiznessData({ ...biznessData, tags: e.target.value })}></TextField>
                    {tagsArray[0] !== '' ? tagsArray.map((data) => {
                        return (
                            <Chip
                                className={classes.chip}
                                avatar={<Avatar>{data[0]}</Avatar>}
                                label={data}
                                color="secondary"
                            />
                        );
                    }): null}
                    <TextField name="owner" variant="outlined" fullWidth label="Owner" size="small" value={biznessData.owner} onChange={(e) => setBiznessData({ ...biznessData, owner: e.target.value })}></TextField>
                    <TextField name="contact" variant="outlined" fullWidth label="Contact" size="small" value={biznessData.contact} onChange={(e) => setBiznessData({ ...biznessData, contact: e.target.value })}></TextField>
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setBiznessData({ ...biznessData, logo: base64 })}></FileBase></div>
                    <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                    <Button color="secondary" variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>

            </Paper>
        </div>
    )
}

export default Form
