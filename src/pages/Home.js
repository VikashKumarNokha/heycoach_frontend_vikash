import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'
import  PrimarySearchAppBar  from "../components/Navbar"
import RestarantCard from '../components/Card';
import { baseurl } from '../utilities/BasaeUrl';

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

  const [openpost, setOpenpost] = React.useState(false);
  const handleOpenpost = () => setOpenpost(true);
  const handleClosepost = () => setOpenpost(false);

   const [restaurantData, setRestaurantData] = useState([]);
   const [editdata, setEditdata] = useState({});
   const [addRestaurant, setAddrestaurant] = useState({name : "", image_url : "", address : "", email : "", mobile : "" })
  

      useEffect(()=>{
           getRestaurantlist();
      },[ ])

     function getRestaurantlist(){  
          return  axios.get( baseurl + "get").then((res)=>{
                setRestaurantData( res?.data?.data)
          }).catch((err)=>{
             console.log("err", err);
          })
     }

     function deleteRestaurant(id){
        console.log("fff", `${baseurl}delete/${id}`)
        return axios.delete(`${baseurl}delete/${id}`).then((res)=>{
             console.log("resss", res.data)
              if(res.data){
                alert(" Restaurant Deletion Successfull");
                getRestaurantlist();
              }
        }).catch((err)=>{
            console.log("err", err);
        })
      }
     
      function getRestaurantbyid(id){    
        return axios.get(`${baseurl}get/${id}` ).then((res)=>{
             console.log("resss", res.data.data)
               setEditdata(res?.data?.data)
               handleOpen()
        }).catch((err)=>{
            console.log("err", err);
        })
      }


      function editRestaurant(){ 
        
        if(editdata.name == "" || editdata.image_url == "" || editdata.address == "" ||  editdata.email == "" ||  editdata.phone == "" ){
          alert("please fill all input boxes")
       }else{
        return axios.patch(`${baseurl}update/${editdata?.id}`, editdata ).then((res)=>{
              alert("Restaurant Data Edited successfull") 
              getRestaurantlist();
        }).catch((err)=>{
            console.log("err", err);
        })
      }
      }

      function addRestaurantfun(){ 
         if(addRestaurant.name == "" || addRestaurant.image_url == "" || addRestaurant.address == "" ||  addRestaurant.email == "" ||  addRestaurant.phone == "" ){
            alert("please fill all input boxes")
         }else{
          return  axios.post( baseurl + "post", addRestaurant ).then((res)=>{
                  console.log("resssss", res.data)
                  if(res.data){
                    alert("added successfull");
                    getRestaurantlist();
                  }     

          }).catch((err)=>{
              console.log("err", err);
          })
         }    
   }

        

  return (
    <div>
       <PrimarySearchAppBar setSearchText={setSearchText} searchText={searchText}  handleOpenpost={handleOpenpost} />
                 
           {/* <button style={{width : "200px", height : "30px", background : "green", margin : "10px"}} onClick={()=>handleOpenpost()} >Add New Resataurant</button> */}

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
                  Edit Restaurant
                </Typography>                      
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                          <TextField
                            value={editdata?.name}
                            onChange={(e)=>{setEditdata( {...editdata, name : e.target.value })}}
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
                           value={editdata?.image_url}
                           onChange={(e)=>{setEditdata( {...editdata, image_url : e.target.value })}}
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
                          value={editdata?.address}
                          onChange={(e)=>{setEditdata( {...editdata, address : e.target.value })}}
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
                          value={editdata?.email}
                          onChange={(e)=>{setEditdata( {...editdata, email : e.target.value })}}
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
                          value={editdata?.mobile}
                          onChange={(e)=>{setEditdata( {...editdata, mobile : e.target.value })}}
                              id="state"
                              name="state"
                              label="Enter Mobile Number"
                              fullWidth
                              variant="standard"
                          />
                          </Grid>

                      </Grid>
          
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={()=>{editRestaurant(); handleClose()}} sx={{ mt: 3, ml: 1 }}>
                          Submit
                        </Button>
                    </Box>
              </Paper> 
            </Container>
              </Box>
            </Modal>

            <Modal
              open={openpost}
              onClose={handleClosepost}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                Add New Resataurant
                </Typography>                      
                      <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                          <TextField
                            value={addRestaurant?.name}
                            onChange={(e)=>{setAddrestaurant( {...addRestaurant, name : e.target.value })}}
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
                           value={addRestaurant?.image_url}
                           onChange={(e)=>{setAddrestaurant( {...addRestaurant, image_url : e.target.value })}}
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
                          value={addRestaurant?.address}
                          onChange={(e)=>{setAddrestaurant( {...addRestaurant, address : e.target.value })}}
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
                          value={addRestaurant?.email}
                          onChange={(e)=>{setAddrestaurant( {...addRestaurant, email : e.target.value })}}
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
                          value={addRestaurant?.mobile}
                          onChange={(e)=>{setAddrestaurant( {...addRestaurant, mobile : e.target.value })}}
                              id="state"
                              name="state"
                              label="Enter Mobile Number"
                              fullWidth
                              variant="standard"
                          />
                          </Grid>

                      </Grid>
          
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={()=>{addRestaurantfun(); handleClosepost()}} sx={{ mt: 3, ml: 1 }}>
                          Submit
                        </Button>
                    </Box>
              </Paper> 
            </Container>
              </Box>
            </Modal>
         

       <div style={{display : "flex", justifyContent : "space-evenly", flexWrap :"wrap", margin : "10px"}}>
        {
          restaurantData.length > 0 && restaurantData.filter((e)=>{ return searchText ? e.name.toLowerCase().includes(searchText.toLowerCase()) : true}).map((e,i)=>{
           return <div key={e?.id} style={{margin : "10px"}}  >
                   <RestarantCard restaurantdata={e} deleteRestaurant={deleteRestaurant} getRestaurantbyid= {getRestaurantbyid} />
                   </div>
          })
        }
        </div>

       <Footer/>
    </div>
  )
}

export default Home