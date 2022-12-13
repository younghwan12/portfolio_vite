import React from 'react'

function Section6() {
  return (
    <section id="section06">
        <div className="wrapper">
            <div className="wrapper__inner__big">
                <div className="sec06__tit split">
                    the Study
                </div>
                <div className="sec06__txt">
                    <div className="sec06__txt__t1 split">학원 수강하면서 공부한 것들을 모아놓은 리스트입니다.</div>
                    <div className="sec06__txt__t2 split">그날 배운 내용에 만족하지 않고, 부족한 부분을 파악하고</div> 
                    <div className="sec06__txt__t3 split">skill up 하기 위해서 노력하였습니다. 경험과 배움을 통해 꾸준히</div> 
                    <div className="sec06__txt__t4 split">학습하고, 성장해 나가는 더욱 발전된 모습을 보여드리겠습니다.</div>
                </div>
            </div>
        </div>
        <div className="section__outer">
            <div className="decor wave-bottom">
                <img src="../src/assets/img/wave-bottom.svg" alt="wave-bottom"/>
            </div>
            <div className="decor wire">
                <img src="../src/assets/img/wire.svg" alt="wire"/>
            </div>
            <div className="decor bridge">
                <img src="../src/assets/img/bridge.svg" alt="bridge"/>
            </div>
            <div className="decor air-balloon">
                <img src="../src/assets/img/air-balloon.svg" alt="air-balloon"/>
            </div>
        </div>
        </section>
  )
}

export default Section6