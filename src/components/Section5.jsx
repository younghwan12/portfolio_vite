import React from 'react'

function Section5() {
  return (
    <section id="section05">
        <div className="wrapper">
            <div className="wrapper__inner__big">
                <div className="sec05__tit">The script</div>
                <div className="sec05_divider">
                    <img src="../src/assets/img/divider--white.svg" alt="waves"/>
                </div>
                <div className="sec05__txt1">
                    <div className="sec05__txt1__t1 split">자바스크립트를 처음 배우면서 만든 다양한 효과들입니다.</div>
                    <div className="sec05__txt1__t2 split">배워가면서 점점 성장해가는 모습을 보는 재미가 있습니다.</div>
                    <div className="sec05__txt1__t3 split">업무 시간 외에도 꾸준히 부족한 부분과 유행하는</div>
                    <div className="sec05__txt1__t4 split">기술들을 공부합니다.</div>
                </div>
            </div>
        </div>
        <div className="section__outer">
            <div className="decor sec05_waves">
                <img src="../src/assets/img/waves02.svg" alt="waves"/>
            </div>
            <div className="decor bus">
                <img src="../src/assets/img/bus.svg" alt="bus"/>
            </div>
            <div className="decor spoon2">
                <img src="../src/assets/img/spoon.svg" alt="spoon2"/>
            </div>
            <div className="decor sec05_cloud1">
                <img src="../src/assets/img/bottle-cloud-big.svg" alt="sec05_cloud1"/>
            </div>                                             
        </div>
    </section>
  )
}

export default Section5