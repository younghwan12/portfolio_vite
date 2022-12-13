import React from 'react'

function Section2() {
  return (
    <section id="section02">
        <div className="wrapper">
            <div className="wrapper__inner">
                <div className="sec02__tit split">새로운 즐거움을 찾다.</div>
                <div className="sec02__txt">
                    <div className="sec02__p1">
                        <div className="sec02__p1__t1 split">전자통신과를 전공하고 다양한 분야의 업무를 하며</div>
                        <div className="sec02__p1__t2 split">적성에 맞는 일을 찾고자 하였습니다.</div>                            
                    </div>
                    <div className="sec02__p2">
                        <div className="sec02__p2__t1 split">새로운 자극을 받고자 다양한 직종을 찾아보던중</div>
                        <div className="sec02__p2__t2 split">프로그래밍을 접하게 되면서 국비지원교육을 받게되었습니다.</div>
                        <div className="sec02__p2__t3 split">내가 작성한대로 구현이 되는 컴퓨터 세계는 저에게 즐거움과</div>
                        <div className="sec02__p2__t4 split">새로운 자극으로 다가왔습니다.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section__outer">
            <div className="decor cloud-section">
                <img src="images/cloud-section.svg" aria-hidden="true" alt="cloud-section"/>
            </div>
            <div className="decor plane">
                <div className="decor plane-body">
                    <img src="images/plane.svg" aria-hidden="true" alt="plane-body"/>
                </div>
                <div className="decor plane-cloud">
                    <img src="images/plane-cloud-big.svg" aria-hidden="true" alt="plane-cloud"/>
                </div>
            </div>                 
            <div className="decor black-cloud1">
                <img src="images/blackcloud-big.svg" aria-hidden="true" alt="black-cloud1" aria-label="hidden"/>
            </div>
            <div className="decor black-cloud2">
                <img src="images/blackcloud-medium.svg" aria-hidden="true" alt="black-cloud2"/>
            </div>
            <div className="decor black-cloud3">
                <img src="images/blackcloud-medium.svg" aria-hidden="true" alt="black-cloud3"/>
            </div>
            <div className="decor halfmoon">
                <img src="images/halfmoon.svg" aria-hidden="true" alt="halfmoon"/>
            </div>
            <div className="decor town">
                <img src="images/town.svg" aria-hidden="true" alt="town"/>
            </div>
        </div>
    </section>
  )
}

export default Section2