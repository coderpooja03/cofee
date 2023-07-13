let lt=gsap.timeline();
let time=00;

lt
    .from("#nav1",{
        // delay:"-0.5",
        opacity:0,
        y:-100,
        rotate:90,
        duration:1,
    })
    .from("#navRightA",{
        opacity:0,
        y:-100,
        rotate:90,
    })
    .from("#navRightB",{
        opacity:0,
        y:-100,
        rotate:90,
        duration:0.3,
    })
    .from("#navRightC",{
        opacity:0,
        y:-100,
        rotate:90,
        duration:0.3,
    })
    .from("#navRightD",{
        opacity:0,
        y:-100,
        rotate:90,
        duration:0.3,
    })
    .from("#navRightE",{
        opacity:0,
        y:-100,
        rotate:90,
        duration:0.3,
    })
    .from("#navRightF",{
        opacity:0,
        y:-100,
        rotate:90,
        duration:0.3,
    })
    .from("#page1Right",{
        opacity:0,
        scale:0.6,
        y:100,
        duration:0.7,
    })
    .from("#page1Center h1",{
        opacity:0,
        onStart: function(){
            $('#page1Center h1').textillate({ in: { effect: 'fadeInUp' } });
        }
    })
    .from("#page1Center h5",{
        opacity:0,
        delay:1.6,
        onStart: function(){
            $('#page1Center h5').textillate({ in: { effect: 'rollIn' } });
        }
    })
    .from("#page1Center p",{
        delay:1,
        opacity:0,
        color:"red",
        
    })
    .from("#page1Center button",{
        delay:0.5,
        opacity:0,
        scale:1.3
    })
    .from("#triangleUp",{
        opacity:0,
        rotate:180,
        y:-100,
        x:60,
        duaration:2,
    })
    .from("#triangleDown",{
        delay:"-0.5",
        opacity:0,
        rotate:180,
        y:100,
        x:-60,
        duaration:2,
    })
    .from("#Page1LeftCircle",{
        opacity:0,
        rotate:1000,
        duration:2,
        y:190,
        ease:"Power4.easeOut"
    })
    .from("#page1LeftShare",{
        opacity:0,
        scale:0.9,
        delay:'-1'   
    })




gsap.from("#page2Left h1",{
    scrollTrigger:{
        trigger:"#page2Left h1",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"bottom 30%",
        scrub:2,    
    },
    x:-100,
    opacity:0,
    color:"red",
})
gsap.from("#page2Left p",{
    scrollTrigger:{
        trigger:"#page2Left p",
        scroller:"body",
markers:false,
        start:"top 100%",
        end:"bottom 40%",
        scrub:2,    
    },
    x:100,
    opacity:0,
})
gsap.from("#page2Left h4",{
    scrollTrigger:{
        trigger:"#page2Left h4",
        scroller:"body",
        markers:false,
        start:"top 90%",
        end:"bottom 70%",
        scrub:2,    
    },
    x:100,
    opacity:0,
})
gsap.from("#page2Left button",{
    scrollTrigger:{
        trigger:"#page2Left button",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 60%",
        scrub:2,    
    },
    scale:0,
    opacity:0,
    rotate:180,
})
gsap.from("#page2Div",{
    scrollTrigger:{
        trigger:"#page2Div",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 60%",
        scrub:2,    
    },
    scale:1.5,
    color:"black"
})
gsap.from("#page3Left1 , #page3Left2",{
    scrollTrigger:{
        trigger:"#page3Left1, #page3Left2",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 60%",
        scrub:2,    
    },
    x:-100,
    scale:1.2,
    opacity:0.4,
})
gsap.from("#page3Center",{
    scrollTrigger:{
        trigger:"#page3Center",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 80%",
        scrub:2,    
    },
    scale:0.5,
})
gsap.from("#page3Right2",{
    scrollTrigger:{
        trigger:"#page3Right2",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 85%",
        scrub:1,    
    },
    opacity:0,
})
gsap.from("#page3Right1",{
    scrollTrigger:{
        trigger:"#page3Right1",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 60%",
        scrub:2,    
    },
    x:100,
})
gsap.from("#page3Center button",{
    scrollTrigger:{
        trigger:"#page3Center button",
        scroller:"body",
        markers:false,
        start:"bottom 80%",
        end:"bottom 70%",
        scrub:2,    
    },
    opacity:0,
    scale:0.7,
})
gsap.from("#page4Right h1",{
    scrollTrigger:{
        trigger:"#page4Right h1",
        scroller:"body",
        markers:false,
        start:"bottom 80%",
        end:"bottom 70%",
        scrub:2,    
    },
    onStart: function(){
        $('#page4Right h1').textillate({ in: { effect: 'fadeInUp' } });
    },
    opacity:0,
})
gsap.from(".page4RightDiv",{
    scrollTrigger:{
        trigger:".page4RightDiv",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 90%",
        scrub:2,    
    },
    scale:0.5,
    color:"black",
    opacity:0,
})
gsap.from("#page5Top1 h1",{
    scrollTrigger:{
        trigger:"#page5Top1 h1",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 60%",
        scrub:2,    
    },
    onStart: function(){
        $('#page5Top1 h1').textillate({ in: { effect: 'fadeInLeftBig' } });
    },
})
gsap.from("#page5Bottom1",{
    scrollTrigger:{
        trigger:"#page5Bottom1 ",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 90%",
        scrub:2,    
    },
    scale:0.7,
    opacity:0,
})
gsap.from(" #page5Bottom2 ",{
    scrollTrigger:{
        trigger:" #page5Bottom2 ",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 90%",
        scrub:2,    
    },
    scale:0.8,
    opacity:0,
})
gsap.from("#page5Bottom3",{
    scrollTrigger:{
        trigger:"#page5Bottom3",
        scroller:"body",
        markers:false,
        start:"bottom 100%",
        end:"bottom 90%",
        scrub:2,    
    },
    scale:0.7,
    opacity:0,
})
gsap.from(" #page5Bottom4, #page5Bottom5",{
scrollTrigger:{
          trigger:" #page5Bottom4, #page5Bottom5",
          scroller:"body",
          markers:false,
          start:"bottom 100%",
          end:"bottom 90%",
          scrub:2,    
      },
      scale:0.8,
      opacity:0,
  })

  var pic1=[ src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80",
  src= "https://images.unsplash.com/photo-1577056923041-6f8628ea2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  src="https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ]
  let n1=0;
  let n2=1;
  let n3=2;
  
  document.getElementById("page2Circle1").addEventListener("click",function(){
      n1--;
      n2--;
      n3--;
      n1=checkLeft(n1);
      n2=checkLeft(n2);
      n3=checkLeft(n3);
      document.getElementById("page2Right1").style.backgroundImage = "url("+pic1[n1]+")"; 
      document.getElementById("page2Right2").style.backgroundImage = "url("+pic1[n2]+")"; 
      document.getElementById("page2Right3").style.backgroundImage = "url("+pic1[n3]+")"; 
  
    
  })
  function checkLeft(elem){
      if (elem<0){
          return 2;
      }
      return elem;
  }
  
  document.getElementById("page2Circle2").addEventListener("click",function(){
      n1++;
      n2++;
      n3++;
      n1=checkRight(n1);
      n2=checkRight(n2);
      n3=checkRight(n3);
      document.getElementById("page2Right1").style.backgroundImage = "url("+pic1[n1]+")"; 
      document.getElementById("page2Right2").style.backgroundImage = "url("+pic1[n2]+")"; 
      document.getElementById("page2Right3").style.backgroundImage = "url("+pic1[n3]+")"; 
  
  })
  function checkRight(ele){
      if (ele>2){
          return 0;
      }
      return ele;
  }
  
  var pic2=[src="https://images.unsplash.com/photo-1504538292323-20e79775474d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  src="https://images.unsplash.com/photo-1553867669-5ef9529cc9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbWFraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  src="https://media.istockphoto.com/id/1137860462/photo/coffee-cup-with-latte-art-foam-on-wood-table-in-coffee-shop-with-copy-space-coffee-is-one-of.jpg?s=170667a&w=0&k=20&c=oLKb9PEkxQ6hE22yvplR8-4vnqw-jBUn8N6RdE4anKE="
  ];
  let m1=0;
  let m2=1;
  let m3=2;
  
  
  document.getElementById("page4RightCircle").addEventListener("click",function(){
      m1--;
      m2--;
      m3--;
      m1=checkLeft(m1);
      m2=checkLeft(m2);
      m3=checkLeft(m3);
      document.getElementById("page4Right1").style.backgroundImage = "url("+ pic2[m1]+")"; 
      document.getElementById("page4Right2").style.backgroundImage = "url("+pic2[m2]+")"; 
      document.getElementById("page4Right3").style.backgroundImage = "url("+pic2[m3]+")"; 
  })