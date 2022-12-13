import React from 'react'

function Section5_1() {
  return (
    <section id="section05-1">
        <div className="wrapper">
            <div className="wrapper__inner__big">
                <div className="sec05__inner aife">
                    <div className="sec05__left">
                        <figure className="bigCard Card1">                                
                            <img src="images/scriptbg.png" alt="scriptbg1"/>
                            <a href="https://younghwan12.github.io/codingclassName/javascript/effect/parallaxEffect01.html" target="_blank"><img className="script01" src="images/script01.png" alt="script01"/></a> 
                            <div className="sec05__card__tit Card1__tit">
                                패럴랙스
                            </div>
                            <div className="sec05__card__txt">
                                innerHeight 와 ScrollTop을 이용해 사이드 메뉴, 리빌 효과, 이질감 효과 등 다양한 효과를 스크립트로 제작하였습니다.
                            </div>
                        </figure>
                        <figure className="smallCard Card3">
                            <img src="images/scriptbg.png" alt="scriptbg3"/>
                            <a href="https://younghwan12.github.io/codingclassName/javascript/effect/quizEffect01.html" target="_blank"><img className="script02" src="images/script03.png" alt="script03"/></a>
                            <div className="sec05__card__tit Card3__tit">
                                퀴즈
                            </div>
                            <div className="sec05__card__txt">
                                객관식, 주관식, 다음문제등, 여러 유형의 문제들을 객체에 저장시켜 사용자의 입력값과 정답을 확인하는 퀴즈들을 제작하였습니다. 
                            </div>
                        </figure>
                        <figure className="bigCard Card5">
                            <img src="images/scriptbg.png" alt="scriptbg5"/>
                            <a href="https://younghwan12.github.io/codingclassName/javascript/effect/gameEffect01.html" target="_blank"><img className="script01" src="images/script05.png" alt="script05"/></a>
                            <div className="sec05__card__tit Card5__tit">
                                테트리스
                            </div>
                            <div className="sec05__card__txt">
                                지금까지 자바스크립트를 배우며 공부했던 메서드, 함수, 이벤트들을 이용해서 만든 테트리스 게임입니다. 
                            </div>
                        </figure>
                    </div>
                    <div className="sec05__right">
                        <figure className="smallCard Card2">
                            <img src="images/scriptbg.png" alt="scriptbg2"/>
                            <a href="https://younghwan12.github.io/codingclassName/javascript/effect/searchEffect01.html" target="_blank"><img className="script02" src="images/script02.png" alt="script02"/></a>                                
                            <div className="sec05__card__tit Card2__tit">
                                서치
                            </div>
                            <div className="sec05__card__txt">
                                다양한 메서드들을 이용해서 사용자의 입력값을 찾을수 있는 서치 효과를 스크립트로 제작하였습니다.
                            </div>
                        </figure>
                        <figure className="bigCard Card4">
                            <img src="images/scriptbg.png" alt="scriptbg4"/>
                            <a href="https://younghwan12.github.io/codingclassName/javascript/effect/mouseEffect01.html" target="_blank"><img className="script01" src="images/script04.png" alt="script04"/></a>
                            <div className="sec05__card__tit Card4__tit">
                                마우스
                            </div>
                            <div className="sec05__card__txt">
                                마우스 커서의 좌표값을 구한뒤, 그 커서를 이용해서 마우스로 표현할수 있는 다양한 효과를 스크립트로 제작하였습니다. 
                            </div>
                        </figure>
                        <figure className="smallCard Card6">
                            <img src="images/scriptbg.png" alt="scriptbg6"/>
                            <a href="https://younghwan12.github.io/codingclassName/javascript/effect/sliderEffect01.html" target="_blank"><img className="script02" src="images/script06.png" alt="script06"/></a>
                            <div className="sec05__card__tit Card6__tit">
                                슬라이드
                            </div>
                            <div className="sec05__card__txt">
                                스와이퍼 같은 프레임워크를 이용하지 않고, 직접 스크립트를 짜서 제작한 다양한 슬라이드 효과들입니다.
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div className="section__outer">
            <div className="decor sec05_waves_bottom">
                <img src="images/waves02.svg" alt="waves_bottom"/>
            </div> 
            <div className="decor sec05_cloud2">
                <img src="images/bottle-cloud-little.svg" alt="sec05_cloud2"/>
            </div>
        </div>
        </section>
  )
}

export default Section5_1