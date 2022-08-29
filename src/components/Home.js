import React from 'react';
import Cards from "./Cards";
import LastProducts from "./LastProducts";
import LastUsers from "./LastUsers";

function Home() {
  return (
    <div className='container'>
        <Cards />
        <LastProducts/>
        <LastUsers/>
    </div>
  )
}

export default Home