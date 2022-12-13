// import gsap from "gsap";
// import $ from 'jquery';

// function loading(){

//     //imagesLoaded라이브러리에서 body요소의 이미지 로딩을 모니터링
//     //imgTotal, 동시에 body전체 이미지 수를 저장
//     //imgLoaded, 읽을 완료 한 이미지의 숫자 카운터
//     //imgCurrent, 진행률 표시의 현재 위치에 해당하는 수치
//     //progressTimer, 1초에 60번씩 읽어 여부 확인
//     let imgLoad = imagesLoaded("body"),
//         imgTotal = imgLoad.images.length,
//         imgLoaded = 0,
//         imgCurrent = 0,
//         progressTimer = setInterval(updateProgress, 1000/60);

//     //imgagesLoaded을 이용하여 이미지를 로드 할 때 마다 카운트를 계산
//     imgLoad.on('progress', function(){
//         imgLoaded++;
//     });

//     //이미지로드 상황을, 바탕으로 진행표시를 업데이트
//     //target, 읽을 완료 한 이미지의 비율
//     //imgCurrent(현재 위치)와 target(목적지)의 거리를 바탕으로 여유를 건다
//     // 텍스트는 소수점 이하를 버리고 정수로
//     function updateProgress(){
//     let target = (imgLoaded/imgTotal) * 100;
//     imgCurrent += (target - imgCurrent) * 0.1;
//     $(".loading__text").text(Math.floor(imgCurrent) + "%");

//     //종료
//     if(imgCurrent >= 100){
//         //진행표시의 업데이트를 중지
//         clearInterval(progressTimer);
//         setTimeout(() => {
//             const t3 = gsap.timeline();
//             t3.to(".loading__text", {duration: 0.4, opacity: 0}, "1")
//             t3.to(".loading", {duration: 0.4, width: 0})
//                 },1000)
//         }
//         // imgCurrent가 99보다 크면 100으로 간주
//         if(imgCurrent > 99){
//             imgCurrent = 100;
//         }
//     }
// }
// export default loading