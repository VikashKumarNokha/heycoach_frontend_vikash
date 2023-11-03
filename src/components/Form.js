import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function Checkout() {
  


  return (
    <React.Fragment>  
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Address
          </Typography>         
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                       onChange={(e)=>{console.log("nameee", e.target.value)}}
                        required
                        id="firstName"
                        name="firstName"
                        label="Enter Restaurant Name"
                        fullWidth
                        autoComplete="given-name"
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
    
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={""} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
              </Box>
        </Paper> 
      </Container>
    </React.Fragment>

  );
}