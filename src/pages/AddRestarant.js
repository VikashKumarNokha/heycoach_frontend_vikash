import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer'
import PrimarySearchAppBar from '../components/Navbar';
//import Checkout from '../components/Form';


function AddRestarant() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
        <PrimarySearchAppBar setSearchText={setSearchText} searchText={searchText} />
           {/* <Checkout/>  */}
        <Footer/>
    </div>
  )
}

export default AddRestarant