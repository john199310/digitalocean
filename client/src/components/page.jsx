import { Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import back1 from '../img/back1.jpg';
import back2 from '../img/back2.jpg';
import back3 from '../img/back3.jpg';
import {Typography} from '@mui/material';
import {Modal} from '@mui/material';
import {Box} from '@mui/material';
import React from 'react';
import Login from './log_in';

// const style = {
//     // position: 'absolute',
//     // top: '50%',
//     // left: '50%',
//     // transform: 'translate(-50%, -50%)',
//     // width: 800,
//     // bgcolor: 'background.paper',
//     // border: '2px solid #000',
//     // boxShadow: 24,
//     width: '80%',
//     height: '600px',
//     margin: 'auto'
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center'
    
//   };
  
    
export default function Page () {

    const items = [
        {
          
            image:  back1
        },
        {
          
            image:  back2
        },
        {
          
            image: back3 
        }
    ]
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div style={{position:"relative"}}>
        
         <Carousel indicators={false} style={{zIndex:"0"}}   autoPlay={true}  animation="slide">
          
           {items.map((item, index) => (
            <Paper key={index}>
                
             <img src={item.image} style={{ width:"100%", height:"850px",maxHeight:""}} alt={item.name} />
            
             
             </Paper>
           ))}
           
       </Carousel>
       <div style={{zIndex:"100",position: "absolute",right:"100px", top:"30px"}}>
            <Button variant="contained" href="/Login" style={{backgroundColor:"",color:"white"}}>log in</Button>
            <Button variant="contained" href="/Signin" style={{backgroundColor:"",color:"white"}}>sign in</Button>
            {/* <Button onClick={handleOpen}>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Login />
                </Box>
            </Modal> */}
        </div>
       </div>

    );
}