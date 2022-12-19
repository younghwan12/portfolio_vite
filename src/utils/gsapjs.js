import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";


const gsapjs = () => {

    let scrollTween;

    gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        
  // 가로 모드
        
  const sections = gsap.utils.toArray(".rowsection");

  let mm = gsap.matchMedia();
  mm.add("(min-width: 676px)", () => {

        scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontalWrap",
                pin: true,
                scrub: 1,
                end: "+=6000",
            },
        });

      // gsap.set(".sec05__card__txt", {display: "none"})
      gsap.set(".sec05__card__txt", {opacity: 0})

      gsap.set(".Card1", {rotation: 10})
      gsap.set(".Card2", {rotation: -5, yPercent:25})
      gsap.set(".Card3", {rotation: -25})
      gsap.set(".Card4", {rotation: 15, yPercent:25})
      gsap.set(".Card5", {rotation: -35})
      gsap.set(".Card6", {rotation: 20, yPercent:25})

      
      gsap.set(".Card1__tit", {xPercent:-10})
      gsap.set(".Card2__tit", {xPercent:20})
      gsap.set(".Card3__tit", {xPercent:-10, yPercent:-30})
      gsap.set(".Card4__tit", {xPercent:-10})
      gsap.set(".Card5__tit", {xPercent:-10})
      gsap.set(".Card6__tit", {xPercent:-10})

      gsap.to(".Card1", {
          x: 50, rotation:0,
          scrollTrigger: {
              trigger: ".Card1",
              start: "top 20%",
              scrub: true,
          }
      });
      gsap.to(".Card1__tit", {
          xPercent:30 ,yPercent: -600, rotation:30, z:1,
          scrollTrigger: {
              trigger: ".Card1",
              start: "top 20%",
              scrub: true,
          }
      });

      gsap.to(".Card2", {
          x: 50, rotation:0, delay:.3,
          scrollTrigger: {
              trigger: ".Card1",
              start: "top 20%",
              scrub: true,
          }
      });
      gsap.to(".Card2__tit", {
          xPercent:60 ,yPercent: -600, rotation:60, z:1,
          scrollTrigger: {
              trigger: ".Card2",
              start: "top 20%",
              scrub: true,
          }
      }); 

      gsap.to(".Card3", {
          x: 50, rotation:0,
          scrollTrigger: {
              trigger: ".Card3",
              start: "top 20%",
              scrub: true,
          }
      });
      gsap.to(".Card3__tit", {
          xPercent:-80 ,yPercent: -600, rotation:-60, z:1,
          scrollTrigger: {
              trigger: ".Card3",
              start: "top 20%",
              scrub: true,
          }
      });

      gsap.to(".Card4", {
          x: 50, rotation:0,
          scrollTrigger: {
              trigger: ".Card3",
              start: "top 20%",
              scrub: true,
          }
      });
      gsap.to(".Card4__tit", {
          xPercent:60 ,yPercent: -600, rotation:60, z:1,
          scrollTrigger: {
              trigger: ".Card3",
              start: "top 20%",
              scrub: true,
          }
      });

      gsap.to(".Card5", {
          x: 50, rotation:0,
          scrollTrigger: {
              trigger: ".Card5",
              start: "top 20%",
              scrub: true,
          }
      });
      gsap.to(".Card5__tit", {
          xPercent:-80 ,yPercent: -600, rotation:-76, z:1,
          scrollTrigger: {
              trigger: ".Card5",
              start: "top 20%",
              scrub: true,
          }
      });

      gsap.to(".Card6", {
          x: 50, rotation:0,
          scrollTrigger: {
              trigger: ".Card5",
              start: "top 20%",
              scrub: true,
          }
      });
      gsap.to(".Card6__tit", {
          xPercent:60 ,yPercent: -600, rotation:60, z:1,
          scrollTrigger: {
              trigger: ".Card6",
              start: "top 20%",
              scrub: true,
          }
      });

      gsap.to("#section07", {
      scrollTrigger: {
          trigger: "#section06-1 .wrapper",
          scrub: true,
          start: "top -90%",
          pin: true,
      }
  });

      
  })

  // section01
  gsap.set("#header", {y: -100})
  gsap.set(".txt1 span", {opacity: 0, yPercent: 100})
  gsap.set(".txt2 span", {opacity: 0, y: -100})
  gsap.set(".section01__inner img", {scale: 0 ,opacity: 0,})
  gsap.set(".cloud1", { opacity: 0,})
  gsap.to(".plane", {x:0, y:0,z:0, scale:1});
  // 합격

  
//   gsap.set(".lds-spinner", {opacity: 1, marginTop: 50})
//   gsap.to(".lds-spinner", {duration: 5, display:"none"})

  gsap.to(".txt1 span", {duration: .3, delay: 3 ,opacity: 1, yPercent: 0, stagger: 0.09});
  gsap.to(".txt2 span", {duration: .3, delay: 4 ,opacity: 1, y: 0, stagger: 0.09});
  gsap.to(".section01__inner img", {duration: .6, delay: 5, scale: 1, opacity: 1, ease: "slow(0.7, 0.7, false)", y: 0});
  gsap.to(".cloud1", {duration: 1, delay: 6, opacity: 1, ease: "power2.out"});
  gsap.to("#header", {duration: 1, delay: 7, y:0});
  // section01

  const t2 = gsap.timeline({
      scrollTrigger: {
          trigger: ".cloud-section",
          // markers: true,
          scrub: 1,
          delay: 2,
      }
  })
  .to(".plane", {
      x: 3000,
      y: -800,
      z: 20,
      scale: 2,         
      stagger: .2,
  })

  gsap.set(".sec02__tit span", {opacity: 0, yPercent: -100})
  gsap.set(".sec02__txt .sec02__p1__t1 span", {opacity: 0,xPercent:-100, yPercent:100 })
  gsap.set(".sec02__txt .sec02__p1__t2 span", {opacity: 0,xPercent:-100, yPercent:100 })

  gsap.set(".sec02__txt .sec02__p2__t1 span", {opacity: 0,xPercent:-100, yPercent:100 })
  gsap.set(".sec02__txt .sec02__p2__t2 span", {opacity: 0,xPercent:-100, yPercent:100 })
  gsap.set(".sec02__txt .sec02__p2__t3 span", {opacity: 0,xPercent:-100, yPercent:100 })
  gsap.set(".sec02__txt .sec02__p2__t4 span", {opacity: 0,xPercent:-100, yPercent:100 })

  

  gsap.to(".ham_menu div", {
      backgroundColor: "#000",
      scrollTrigger: {
          trigger: "#section02",
          start: "top 10%",
      }
  });
  gsap.to(".ham_menu div", {
      backgroundColor: "#fff",
      scrollTrigger: {
          trigger: "#section03-1",
          start: "bottom 30%",
      }
  });
  gsap.to(".ham_menu div", {
      backgroundColor: "#000",
      scrollTrigger: {
          trigger: "#section06",
          start: "top 10%",
      }
  });

  

  gsap.to(".sec02__tit span", {
      opacity: 1,
      ease: "bounce.out",
      yPercent: 0,
      stagger: .04,
      scrollTrigger: {
          trigger: ".black-cloud1",
          start: "top 30%",
      }
  });

  gsap.to(".sec02__p1__t1 span", {
      ease: "power3.easeInOut",
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.03,
      scrollTrigger: {
          trigger: ".halfmoon",
          start: "top 30%",
      }
  });
  gsap.to(".sec02__p1__t2 span", {
      ease: "power3.easeInOut",
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.03,
      scrollTrigger: {
          trigger: ".halfmoon",
          start: "top 30%",
      }
  });

  gsap.to(".sec02__p2__t1 span", {
      ease: "power3.easeInOut",
      // delay:0.3,
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".halfmoon",
          start: "top 20%",
      }
  });
  gsap.to(".sec02__p2__t2 span", {
      ease: "power3.easeInOut",
      // delay:0.3,
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".halfmoon",
          start: "top 20%",
      }
  });
  gsap.to(".sec02__p2__t3 span", {
      ease: "power3.easeInOut",
      // delay:0.3,
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".halfmoon",
          start: "top 20%",
      }
  });
  gsap.to(".sec02__p2__t4 span", {
      ease: "power3.easeInOut",
      // delay:0.3,
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".halfmoon",
          start: "top 20%",
      }
  });
  gsap.to(".town", {
      rotation: -16,
      stagger: .2,
      duration: .5,
      scrollTrigger: {
          trigger: ".town",
          start: "top 30%",
          scrub: true,
      }
  });

  // section03
  
  gsap.set(".sec03__tit", {opacity: 0, scale: 0,})
  gsap.set(".modal-title-decor", {opacity: 0, scale: 0,})
  gsap.set(".sec03__card__subTit1 span", {opacity:0, scale:0, xPercent:-100, yPercent: -100,  rotation: 1080})
  gsap.set(".sec03__card__txt2__t1 span", { xPercent:-100, yPercent:100, opacity:0,})
  gsap.set(".sec03__card__txt2__t2 span", { xPercent:-100, yPercent:100, opacity:0,})
  gsap.set(".sec03__card__txt2__t3 span", { xPercent:-100, yPercent:100, opacity:0,})
  gsap.set(".sec03__card__txt2__t4 span", { xPercent:-100, yPercent:100, opacity:0,})
  gsap.set(".sec03__card__txt2__t5 span", { xPercent:-100, yPercent:100, opacity:0,})
  gsap.set(".sec03__card__txt2__t6 span", { xPercent:-100, yPercent:100, opacity:0,})
  


  gsap.to(".sec03__tit", {
      opacity: 1, scale: 1, duration: .8, ease: "bounce.out",
      scrollTrigger: {
          trigger: ".sec03__tit",
          start: "top 80%",
      }
  });
  gsap.to(".modal-title-decor", {
      delay:0.3, opacity: 1, scale: 1, duration: .8, ease: "bounce.out", rotation:30,
      scrollTrigger: {
          trigger: ".sec03__tit",
          start: "top 80%",
      }
  });

  gsap.to(".sec03__card__subTit1 span", {
      scale:1, yPercent: 0, xPercent:0, ease: "power3.InOut", stagger: .06,  rotation: 0, opacity:1,
      scrollTrigger: {
          trigger: ".sec03__card__subTit1",
          start: "top 70%",
      }
  });
  gsap.to(".sec03__card__txt2__t1 span", {
      xPercent:0, yPercent:0, opacity:1, stagger:0.03, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt2",
          start: "top 50%",
      }
  });
  gsap.to(".sec03__card__txt2__t2 span", {
      xPercent:0, yPercent:0, opacity:1, stagger:0.03, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt2",
          start: "top 50%",
      }
  });
  gsap.to(".sec03__card__txt2__t3 span", {
      xPercent:0, yPercent:0, opacity:1, stagger:0.03, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt2",
          start: "top 50%",
      }
  });
  gsap.to(".sec03__card__txt2__t4 span", {
      xPercent:0, yPercent:0, opacity:1, stagger:0.03, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt2",
          start: "top 50%",
      }
  });
  gsap.to(".sec03__card__txt2__t5 span", {
      xPercent:0, yPercent:0, opacity:1, stagger:0.03, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt2",
          start: "top 50%",
      }
  });
  gsap.to(".sec03__card__txt2__t6 span", {
      xPercent:0, yPercent:0, opacity:1, stagger:0.03, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt2",
          start: "top 50%",
      }
  });
  gsap.to(".profile01", {
      rotation:6,
      scrollTrigger: {
          trigger: ".profile01",
          start: "top 50%",
          scrub: true,
      }
  });


  gsap.set(".sec03__card__subTit2 span", { xPercent:-100 ,yPercent: -100, })
  gsap.set(".sec03__card__txt3__t1 span", {xPercent:100, yPercent:100, opacity:0 })
  gsap.set(".sec03__card__txt3__t2 span", {xPercent:100, yPercent:100, opacity:0 })
  gsap.set(".sec03__card__txt3__t3 span", {xPercent:100, yPercent:100, opacity:0 })
  gsap.set(".sec03__card__txt3__t4 span", {xPercent:100, yPercent:100, opacity:0 })
  gsap.set(".sec03__card__txt3__t5 span", {xPercent:100, yPercent:100, opacity:0 })
  gsap.set(".sec03__card__txt3__t6 span", {xPercent:100, yPercent:100, opacity:0 })

  

  gsap.to(".sec03__card__subTit2 span", {
      xPercent:0, yPercent:0, stagger:0.06, ease: "elastic.out(1, 0.3)", duration:1, opacity:1,
      scrollTrigger: {
          trigger: ".sec03__card__subTit2",
          start: "top 70%",
      }
  });
  gsap.to(".petrychka", {
      rotation:15, scale:1.2,
      scrollTrigger: {
          trigger: ".petrychka",
          start: "top 70%",
          scrub:true,
      }
  });
  gsap.to(".knife", {
      rotation: 30, x: 80, y:80,
      scrollTrigger: {
          trigger: ".knife",
          start: "top 70%",
          scrub:true,
      }
  });
  gsap.to(".sec03__card__txt3__t1 span", {
      xPercent:0, yPercent:0, stagger:0.018, opacity:1, ease:"power3.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt3",
          start: "top 70%",
      }
  });
  gsap.to(".sec03__card__txt3__t2 span", {
      xPercent:0, yPercent:0, stagger:0.018, opacity:1, ease:"power3.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt3",
          start: "top 70%",
      }
  });
  gsap.to(".sec03__card__txt3__t3 span", {
      xPercent:0, yPercent:0, stagger:0.018, opacity:1, ease:"power3.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt3",
          start: "top 70%",
      }
  });
  gsap.to(".sec03__card__txt3__t4 span", {
      xPercent:0, yPercent:0, stagger:0.018, opacity:1, ease:"power3.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt3",
          start: "top 70%",
      }
  });
  gsap.to(".sec03__card__txt3__t5 span", {
      xPercent:0, yPercent:0, stagger:0.018, opacity:1, ease:"power3.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt3",
          start: "top 70%",
      }
  });
  gsap.to(".sec03__card__txt3__t6 span", {
      xPercent:0, yPercent:0, stagger:0.018, opacity:1, ease:"power3.InOut",
      scrollTrigger: {
          trigger: ".sec03__card__txt3",
          start: "top 70%",
      }
  });
  gsap.to(".profile02", {
      rotation:-6,
      scrollTrigger: {
          trigger: ".profile02",
          start: "top 70%",
          scrub:true,
      }
  });


  // section04
  

  // ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

  gsap.to(".plane2", {
      y: -250,
      x: 250,
      rotation: 4,
      scrub: 10,
      scrollTrigger: {
          trigger: ".plane2",
          containerAnimation: scrollTween,
          start: "left center",
          scrub: true,
      }
  });

  gsap.to(".spoon", {
      rotation: -40,
      scrub: 10,
      scrollTrigger: {
          trigger: ".spoon",
          containerAnimation: scrollTween,
          start: "left center",
          scrub: true,
      }
  });

  gsap.set(".sec04__tit span", {scale:0})
  gsap.to(".sec04__tit span", {
      scale :1, stagger:0.015, ease: "bounce.out",
      scrollTrigger: {
          trigger: "#section04",
          start: "top 40%",
          scrub: false,
      }
  })
  
  gsap.set(".sec04__txt1", {yPercent:-100 ,opacity:0})
  gsap.to(".sec04__txt1", {
      delay:.4, opacity :1, yPercent:0, stagger:0.15, ease: "power4.inout",
      scrollTrigger: {
          trigger: "#section04",
          start: "top 20%",
          scrub: false,
      }
  })
  gsap.set(".sec04__txt2 ul li span", {yPercent:100,xPercent:-100, opacity:0})
  gsap.to(".sec04__txt2 ul li span", {
      opacity:1,yPercent:0,xPercent:0, stagger:0.03, ease: "power3.inout",
      scrollTrigger: {
          trigger: "#section04",
          start: "top 0%",
          scrub: false,
      }
  })

  gsap.set("#section04-1 ul li", {scale:0})
  gsap.set("#section04-2 ul li", {scale:0})
  gsap.set("#section04-3 ul li", {scale:0})
  gsap.set("#section04-4 ul li", {scale:0})
  gsap.set("#section04-6 ul li", {scale:0})
  
  gsap.set(".sec04-01__txt1__t1 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-01__txt1__t2 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-01__txt1__t3 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-01__txt1__t4 span", {opacity:0 , xPercent:-100, yPercent:100})
  
  gsap.set(".sec04-02__txt1__t1 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-02__txt1__t2 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-02__txt1__t3 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-02__txt1__t4 span", {opacity:0 , xPercent:-100, yPercent:100})
  
  gsap.set(".sec04-03__txt1__t1 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-03__txt1__t2 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-03__txt1__t3 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-03__txt1__t4 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-03__txt1__t5 span", {opacity:0 , xPercent:-100, yPercent:100})

  
  gsap.set(".sec04-04__txt1__t1 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-04__txt1__t2 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-04__txt1__t3 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-04__txt1__t4 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-04__txt1__t5 span", {opacity:0 , xPercent:-100, yPercent:100})
  
  gsap.set(".sec04-05__txt1__t1 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-05__txt1__t2 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-05__txt1__t3 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec04-05__txt1__t4 span", {opacity:0 , xPercent:-100, yPercent:100})

  

  gsap.to(".sec04-01__txt1__t1 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-01__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to(".sec04-01__txt1__t2 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-01__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to(".sec04-01__txt1__t3 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-01__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to(".sec04-01__txt1__t4 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-01__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to("#section04-1 ul li", {scale:1, delay:2, ease: "bounce.out",
      scrollTrigger: {
          trigger: ".sec04-01__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })

  gsap.to(".sec04-02__txt1__t1 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-02__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-02__txt1__t2 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-02__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-02__txt1__t3 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-02__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-02__txt1__t4 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power1.InOut",
      scrollTrigger: {
          trigger: ".sec04-02__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to("#section04-2 ul li", {scale:1, delay:2, ease: "bounce.out",
      scrollTrigger: {
          trigger: ".sec04-02__txt1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to(".sec04-03__txt1__t1 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".star2",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-03__txt1__t2 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".star2",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-03__txt1__t3 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".star2",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-03__txt1__t4 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".star2",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-03__txt1__t5 span", {
    xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
    scrollTrigger: {
        trigger: ".star2",
        containerAnimation: scrollTween,
        start: "left 70%",
        scrub: false,
    }
});
  gsap.to("#section04-3 ul li", {scale:1, delay:2, ease: "bounce.out",
      scrollTrigger: {
          trigger: ".star1",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to(".sec04-04__txt1__t1 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-04__txt1__t2 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-04__txt1__t3 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-04__txt1__t4 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to(".sec04-04__txt1__t5 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power2.InOut",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  });
  gsap.to("#section04-4 ul li", {scale:1, delay:2, ease: "bounce.out",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left 70%",
          scrub: false,
      }
  })
  gsap.to(".sec04-05__txt1__t1 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power4.InOut",
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 20%",
          scrub: false,
      }
  });
  gsap.to(".sec04-05__txt1__t2 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power4.InOut",
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 20%",
          scrub: false,
      }
  });
  gsap.to(".sec04-05__txt1__t3 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power4.InOut",
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 20%",
          scrub: false,
      }
  });
  gsap.to(".sec04-05__txt1__t4 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power4.InOut",
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 20%",
          scrub: false,
      }
  });
  gsap.to("#section04-6 ul li", {scale:1, delay:2, ease: "bounce.out",
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 20%",
          scrub: false,
      }
  })
  

  

  gsap.set(".formula-apple, .formula-wheat", {opacity:0, scale:0})

  gsap.to(".formula-apple", {
      opacity: 1,
      scale:1,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".formula-apple",
          containerAnimation: scrollTween,
          scrub: true,
          start: "left 50%",
          toggleActions: "play none none none",
      }
  });

  gsap.to(".formula-wheat", {
      opacity: 1,
      scale:1,
      delay:2,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".formula-apple",
          containerAnimation: scrollTween,
          start: "left center",
          scrub: true,
          toggleActions: "play none none none",
      }
  });

  gsap.to(".cloudSvg", {
      x: -80,
      y: -80,
      rotation: 12,
      scrollTrigger: {
          trigger: ".cloudSvg",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });

  gsap.to(".cloud-white-small", {
      rotation:360,
      x:200,
      y:-150,
      opacity: 0, 
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".cloudSvg",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });

  gsap.set(".star1", {opacity:0, scale:0})
  gsap.set(".star2", {opacity:0, scale:0})
  gsap.set(".star3", {opacity:0, scale:0})
  gsap.set(".star4", {opacity:0, scale:0, x:200, y: 150, rotation: 360})
  gsap.set(".star5", {opacity:0, scale:0})

  gsap.to(".star1", {
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".star1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".star2", {
      scale: 1,
      opacity: 1,
      delay: .3,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".star1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".star3", {
      scale: 1,
      opacity: 1,
      delay: .6,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".star1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".star4", {
      scale: 2,
      opacity: 1,
      delay: .9,
      rotation:0,            
      x:0,
      y:0,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".star1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".star5", {
      scale: 1,
      opacity: 1,
      delay: 1.2,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".star1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });

  gsap.to(".bar-tool", {
      rotation: 16,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".bar-tool",
          containerAnimation: scrollTween,
          start: "left center",
          scrub: true,
      }
  });
  
  gsap.set(".bubble01", {opacity:0, scale:0})
  gsap.set(".bubble02", {opacity:0, scale:0})
  gsap.set(".bubble03", {opacity:0, scale:0})
  gsap.set(".bubble04", {opacity:0, scale:0})
  gsap.set(".bubble05", {opacity:0, scale:0})

  gsap.to(".bubble01", {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".bubble02", {
      scale: 1,
      opacity: 1,
      delay: .3,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".bubble03", {
      scale: 1,
      opacity: 1,
      delay: .6,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".bubble04", {
      scale: 1,
      opacity: 1,
      delay: .9,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });
  gsap.to(".bubble05", {
      scale: 1,
      opacity: 1,
      delay: 1.2,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bubble01",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
      }
  });

  gsap.to(".strainer2", {
      rotation: 16,
      ease: "power3.out",
      scrollTrigger: {
          trigger: ".strainer2",
          containerAnimation: scrollTween,
          start: "left center",
          scrub: true,
      }
  });

  
  gsap.to(".rocket", {
      xPercent:-700, yPercent:-3000, rotation:-360 ,stagger:0.15, ease: "power4.InOut",
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 10%",
          scrub: true,
      }
  });

  gsap.to(".station", {
      xPercent:-300, yPercent:300, stagger:0.15,
      scrollTrigger: {
          trigger: "#section04-6",
          containerAnimation: scrollTween,
          start: "left 10%",
          scrub: true,
      }
  });

  // section05__txt
  gsap.set(".sec05__txt1__t1 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec05__txt1__t2 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec05__txt1__t3 span", {opacity:0 , xPercent:-100, yPercent:100})
  gsap.set(".sec05__txt1__t4 span", {opacity:0 , xPercent:-100, yPercent:100})

  gsap.to(".sec05__txt1__t1 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".sec05__txt1__t1 span",
          start: "top 60%",
          // markers: true
      }
  });
  gsap.to(".sec05__txt1__t2 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".sec05__txt1__t1 span",
          start: "top 60%",
          // markers: true
      }
  });
  gsap.to(".sec05__txt1__t3 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".sec05__txt1__t1 span",
          start: "top 60%",
          // markers: true
      }
  });
  gsap.to(".sec05__txt1__t4 span", {
      xPercent:0, yPercent:0, opacity :1, stagger:0.015, ease: "power3.InOut",
      scrollTrigger: {
          trigger: ".sec05__txt1__t1 span",
          start: "top 60%",
      }
  });

  

  // section05__txt

  gsap.to(".spoon2", {
      rotation: 120,
      scrollTrigger: {
          trigger: ".spoon2",
          start: "top 60%",
          scrub: true,
      }
  });

  gsap.set(".bus", {scaleY:-1})

  gsap.to(".bus", {
      x:400, y:400, rotation: 260, rotationY:-60, z:200, opacity:0,
      scrollTrigger: {
          trigger: ".bus",
          start: "top 60%",
          scrub: true,
      }
  });

  gsap.to(".sec05_cloud1", {
      x:-200, duration:.7,
      scrollTrigger: {
          trigger: ".sec05_cloud1",
          start: "top 80%",
          scrub: true,
      }
  });
  gsap.to(".sec05_cloud2", {
      x:100, duration:1,
      scrollTrigger: {
          trigger: ".sec05_cloud2",
          start: "top 80%",
          scrub: true,
      }
  });

  

  gsap.set(".sec06__tit span",{ opacity:0, yPercent:-100})

  gsap.to(".sec06__tit span", {
      ease: "bounce.out",
      duration:0.6,
      opacity:1,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".sec06__tit",
          start: "top 80%",
      }
  });


  gsap.set(".sec06__txt__t1 span",{ opacity:0, xPercent:-100, yPercent:100})
  gsap.set(".sec06__txt__t2 span",{ opacity:0, xPercent:-100, yPercent:100})
  gsap.set(".sec06__txt__t3 span",{ opacity:0, xPercent:-100, yPercent:100})
  gsap.set(".sec06__txt__t4 span",{ opacity:0, xPercent:-100, yPercent:100})

  gsap.to(".sec06__txt__t1 span", {
      ease: "power3.easeIn",
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".sec06__txt",
          start: "top 80%",
      }
  });
  gsap.to(".sec06__txt__t2 span", {
      ease: "power3.easeOut",
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".sec06__txt",
          start: "top 80%",
      }
  });
  gsap.to(".sec06__txt__t3 span", {
      ease: "power3.easeInOut",
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".sec06__txt",
          start: "top 80%",
      }
  });
  gsap.to(".sec06__txt__t4 span", {
      ease: "power2.easeInOut",
      opacity:1,
      xPercent:0,
      yPercent:0,
      stagger: 0.02,
      scrollTrigger: {
          trigger: ".sec06__txt",
          start: "top 80%",
      }
  });
}

export default gsapjs