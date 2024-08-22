import React, {useContext} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicMenu from "../elements/BasicMenu";
import { Grid } from "@mui/material";
import { LoginUserContext } from "../provider/LoginUserProvider";


const Header = (props) => {
  const {loginUser} = useContext(LoginUserContext);
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Grid container>
            <Grid item xs={6}>
        <BasicMenu />
        </Grid>
        <Grid item xs={6}>
          <props.name />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ログインユーザー: {loginUser}
          </Typography>
        </Grid>
          </Grid>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header;