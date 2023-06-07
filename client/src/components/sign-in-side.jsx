import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import wallpaper from "../img/wallpaper.jpg";
import logo1 from "../img/logo1.png"
import  InputAdornment  from '@mui/material/InputAdornment/InputAdornment';
import IconButton from '@mui/material/IconButton/IconButton';
import  Visibility  from '@mui/icons-material/Visibility';
import  VisibilityOff  from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

import logo2 from "../img/logo2.png"
import { borderRadius, boxSizing, display, fontFamily, fontWeight, textAlign } from '@mui/system';
import GoogleLogo  from '../img/google-logo.png';
import { Divider } from '@mui/material';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
// TODO remove, this demo shouldn't need to reset the theme.

// const useStyles = makeStyles({
//   button: {
//     backgroundColor: '#fff',
//     borderRadius: '4px',
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
//     color: '#757575',
//     fontSize: '16px',
//     height: '48px',
//     padding: '12px 24px',
//     textTransform: 'none',
//     '&:hover': {
//       boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
//       backgroundColor: '#fff',
//     }
//   },
//   icon: {
//     marginRight: '12px',
//     height: '24px',
//     width: '24px',
//   },
// });



const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
    const updateData = {
      email: data.get('email'),
      password: data.get('password'),
    };
   
    if(updateData.email && updateData.password){
      axios
      .post('http://localhost:5000/auth/register',updateData)
      .then(
        (res) => {navigate('/login'); console.log("OOOKKKK")}
      )
      .catch((err) => console.log(err));

    }else {
      console.log("errrrrrrorrrrr");
      window.alert("fill the form")
  }
    

  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        
      
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
            sx={
              {
            my:8,
            marginLeft: 14,
            position:'relative'

              }
            }
          >
            <img src={logo1} alt="brand" style={{position:"absolute",left:"0px",mixBlendMode:"multiply"}}></img>
            <img src={logo2} alt="brand" style={{position:"absolute", left:"10px", top:"8px",mixBlendMode:"multiply"}}></img>
            <Typography style={{marginLeft:"60px", fontWeight:"400", fontSize:"32"}} component="h1" variant="h5">uBrand</Typography>
          </Box>
          <Box
            sx={{
              my: 8,
              mx: 14,
              display: 'flex',
              flexDirection: 'column',
              
            }}
          > 
          
          
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography style={{fontWeight:"700", fontSize:"35px"}}>
              Start Your 14-Day Free 
              Trial Today.
            </Typography>
            <Typography sx={
              {
                marginLeft: 0,
                my: 1
              }
            } style={{fontWeight:"400",fontSize:"13px"}}>NO CREDIT CARD REQUIRED!</Typography>
            
            <Button style={
              {
                    backgroundColor: '#E3F3FB',
                    borderRadius: '48px',
                    // boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.1)',
                    color: '#757575',
                    fontSize: '16px',
                    height: '48px',
                    padding: '12px 24px',
                    textTransform: 'none',
                    // '&:hover': {
                    //   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    //   backgroundColor: '#fff',
                    // }
                  }
                  
            }
      variant="contained"
      // className={classes.button}
      
    >
      <img src={GoogleLogo} style={{
                        marginRight: '12px',
                        height: '24px',
                        width: '24px',
                        borderRadius:"100px",
                        backgroundColor: 'white',
                        padding: "5px",
                        boxSizing: "content-box"
                      }} alt="logo"/>
      Sign in with Google
    </Button>

   
    <Divider style={{marginTop:"20px"}}>or use Email</Divider>

    {/* <div style={{
      border:"none",
      borderTop: "2px solid #555",
      margin: "0",
      height: "0"
    }}><span style={{
      display: "inline-block",
      position: 'relative',
      top: "-0.7em",
      fontSize: "1.2em",
      backgroundColor: "white",
      paddingLeft :"10px",
      paddingRight: "10px"
    }}>text</span></div> */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                // style={{
                //   '&:focus': {
                //     backgroundColor:"black",
                //   }
                // }}
                variant="outlined"
                // autoFocus
              />  
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                // autoFocus
              />                                    
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor:"#2F3538"}}
                size="large"
                sx={{ mt: 3, mb: 2 }}
              
              >
                start my free trial
              </Button>
              <Grid container sx={                
                    {
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems : 'center'
                    }
                  }
              >
                <Grid item>
                  <Typography href="#" style={{fontSize:"11px"}} variant="body2" color="#212121">
                      By Signing up to uBrand, means you agree to our Privacy Policy and Terms of Service
                  </Typography>
                </Grid>
                <Grid item sx={
                  {
                    mt: 3,
                          
                  }
                }>
                  <Typography style={{fontWeight:"400"}}>Already a Member &nbsp;
                    <Link href="/Login"   variant="body2" style={{fontWeight:"900"}} color="#212121">
                    {"Log In"}
                  </Link>

                    </Typography>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundImage: `url(${wallpaper})` ,

            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      
    </ThemeProvider>
    </ThemeProvider>
  );
}