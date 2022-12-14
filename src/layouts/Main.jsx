import React, { useState } from 'react';
import { ImgLoader , Section1, Section2 , Section3 , Section3_1 , Section4 , Section5 , Section5_1 , Section6 , Section6_1, Section7 , Footer } from '../components';

function Main() {

  // const [isLoading, setIsLoading] = useState(true);
  
  return (
    <main id='main'>
      {/* {isLoading ? (
        <>
          <ImgLoader setIsLoading={setIsLoading} />
        </>
        ) : (
          <>
          <Section1 isLoading={isLoading} />
          <Section2 />
          <Section3 />
          <Section3_1 />
          <Section4 />
          <Section5 />
          <Section5_1 />
          <Section6 />
          <Section6_1 />
          <Section7 />
          <Footer />
          </>
        )} */}
      <ImgLoader />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section3_1 />
      <Section4 />
      <Section5 />
      <Section5_1 />
      <Section6 />
      <Section6_1 />
      <Section7 />
      <Footer />
    </main>
  )
}

export default Main