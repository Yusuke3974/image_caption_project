import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container,Box, Typography,TextField,InputLabel,Select,MenuItem,RadioGroup,FormControlLabel,Radio,FormLabel,Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginUserContext } from "../provider/LoginUserProvider";

const Login = () => {
    const { setLoginUser,setIsLogined } = useContext(LoginUserContext);
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username: "",
        password: ""
});

const handleChange = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
};


const onClickLogin = () => {
    console.log("ログイン処理開始");
    const endpoint = "https://jsonplaceholder.typicode.com/users";
    const queries = {
        username: user.username, id: user.password
    };
    axios.get(endpoint,{ params: queries}).then((response) => {
        console.log(response.data[0]);
        if (response.data[0] === undefined) {
            console.log("ログイン失敗");
            navigate("/loginfailed");
        } else {
            console.log("ログイン成功");
            setLoginUser(response.data[0].username);
            setIsLogined(true);
            navigate('/',{state: {username: "AC"}});
        }
    });
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
            <Typography component="h1" variant="h4">ログイン</Typography>
            <br />
            <TextField 
                    margin="normal"
                    required
                    fullWidth
                    name="username"
                    label="名前"
                    id="username"
                    autoComplete="current-password"
                    sx={{ mt: 2}}
                    onChange={handleChange}
                />
            <TextField 
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="パスワード"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{ mt: 2}}
                    onChange={handleChange}
                />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2}}
                onClick={onClickLogin}
            >
                ログイン
            </Button>
            <Link to="/resister" variant="body2">新規登録はこちら</Link>
            <Link to="/form" variant="body2">お問い合わせ</Link>

        </Box>
    </Container>

    );
}

export default Login;