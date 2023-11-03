import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer'
import  PrimarySearchAppBar  from "../components/Navbar"

function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
       <PrimarySearchAppBar setSearchText={setSearchText} searchText={searchText} />
       <Footer/>
    </div>
  )
}

export default Home