import React from 'react'
import {Section4_1, Section4_2 , Section4_3, Section4_4, Section4_5, Section4_6, Section4_7} from './'
import { gsap } from "gsap";





function section4() {

  return (
    <div className="horizontalWrap">
      <div className="horizontalSection">
        <Section4_1 />
        <Section4_2 />
        <Section4_3 />
        <Section4_4 />
        <Section4_5 />
        <Section4_6 />
        <Section4_7 />
      </div>
  </div>
  )
}

export default section4