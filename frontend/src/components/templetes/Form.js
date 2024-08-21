import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container,Box, Typography,TextField,InputLabel,Select,MenuItem,RadioGroup,FormControlLabel,Radio,FormLabel,Button } from '@mui/material';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


const Form = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        gender: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const navigate= useNavigate();

    const gotoResult = (form) => {
        navigate('/result', { state: form });
    };

    const handleSubmit = (event) => {
        gotoResult(form);
    };

    return (
        <Container>
            <Box sx={{ 
                marginTop:1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                }}
            >
                <Typography variant="h4">アンケートフォーム</Typography>
                <br />
                <TextField
                    id="name"
                    label="名前"
                    name="name"
                    variant='outlined'
                    value={form.name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <br />
                <InputLabel id="demo-simple-select-label">年齢</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.age}
                    name="age"
                    onChange={handleInputChange}
                    fullWidth
                >
                    <MenuItem value={10}>10代</MenuItem>
                    <MenuItem value={20}>20代</MenuItem>
                    <MenuItem value={30}>30代</MenuItem>
                    <MenuItem value={40}>40代</MenuItem>
                    <MenuItem value={50}>50代</MenuItem>
                    <MenuItem value={60}>60代以上</MenuItem>
                </Select>
                <br />
                <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
                <Box sx={{ border: 1,
                    borderRadius: 1,
                    borderColor: 'grey.500',
                    padding: 1,
                    marginTop: 1,
                    marginBottom: 1,
                    width: '100%',
                }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    onChange={handleInputChange}
                    fullWidth
                >
                    <FormControlLabel value="female" control={<Radio />} label="女性" />
                    <FormControlLabel value="male" control={<Radio />} label="男性" />
                    <FormControlLabel value="other" control={<Radio />} label="その他" />
                </RadioGroup>
                </Box>
                <br />
                <TextField 
                    id="outlined-basic" 
                    label="コメント" 
                    variant="outlined" 
                    onChange={handleInputChange} 
                    value={form.comment}
                    fullWidth
                    sx={{ mt: 2}}
                />
                <br />
                <Button 
                    variant="contained" 
                    onClick={handleSubmit}
                    endIcon={<ForwardToInboxIcon />}
                    fullWidth>
                送信</Button>
            </Box>
        </Container>
    );
};

export default Form;