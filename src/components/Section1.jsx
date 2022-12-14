import React from 'react'
import ImgLoader from './ImgLoader'

function Section1() {
  return (
    <section id="section01">
        <div className="section01__inner">          
          <ImgLoader />
          <div className="txt1 split">코딩과 함께 한 모든</div>
          <div className="txt2 split">순간이 눈부셨다</div>
          <img src="images/profile.png" alt="profile"/>
          <div className="cloud1"></div>
        </div>
        <div className="section__outer">                         
        </div>
        <div id="canvas"></div>
    </section>
  )
}

export default Section1