import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer'
import  PrimarySearchAppBar  from "../components/Navbar"
import RestarantCard from '../components/Card';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:  600 ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




function Home() {
  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <PrimarySearchAppBar setSearchText={setSearchText} searchText={searchText} />

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Address
          </Typography>                      
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                      value={"hhhehhhh"}
                       onChange={(e)=>{console.log("nameee", e.target.value)}}
                        required
                        id="firstName"
                        name="firstName"
                        label="Enter Restaurant Name"
                        fullWidth
                        //autoComplete="given-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Enter Restaurant Image url"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Enter Address"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Enter Email Id"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="Enter Mobile Number"
                        fullWidth
                        variant="standard"
                    />
                    </Grid>

                </Grid>
    
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={""} sx={{ mt: 3, ml: 1 }}>
                    Submit
                  </Button>
              </Box>
        </Paper> 
      </Container>
        
        </Box>
      </Modal>
    

       <div style={{display : "flex", justifyContent : "space-evenly", flexWrap :"wrap", margin : "10px"}}>
         <div onClick={handleOpen}>
          <RestarantCard/>
          </div>
          <RestarantCard/>
          <RestarantCard/>
        </div>

       <Footer/>
    </div>
  )
}

export default Home