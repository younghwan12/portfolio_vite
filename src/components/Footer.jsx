import React from 'react'

function Footer() {
  return (
    <footer id="footer">
        <div className="wrapper">
            <div className="footer__txt">
                <h2>contact me</h2>
                <div>
                    Email : <a href="mailto:leesh3432@naver.com">leesh3432@naver.com</a>
                </div>                     
                <div>Github : <a href="https://github.com/younghwan12" target="_blank">github.com/younghwan12</a></div>
                <div>Blog : <a href="https://younghwan112.tistory.com/" target="_blank">younghwan112.tistory.com</a></div>
                <div className="decor profile2">
                    <img src="../src/assets/img/profile2.png" alt="profile02" />
                </div>
            </div>
        </div>            
    </footer>
  )
}

export default Footer