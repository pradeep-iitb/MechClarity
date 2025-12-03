
  let btn1 = document.querySelector("#btn1")
  let btn2 = document.querySelector("#btn2")
  let btn3 = document.querySelector("#btn3")
  let btn4 = document.querySelector("#btn4")
  let btn5 = document.querySelector("#btn5")
  let btn6 = document.querySelector("#btn6")

  function show(i) { 
    for (let count = 1 ; count < 7 ; count ++)
    if ( count === i ) {
        let note= "#note"+count ;
        let noteVal = document.querySelector(note) ;
        noteVal.style.display = "block" ;
    } else {
        let note= "#note"+count ;
        let noteVal = document.querySelector(note) ;
        noteVal.style.display = "none" ;
    }
  }


  btn1.addEventListener("click",() => {show(1);})
  btn2.addEventListener("click",() => {show(2);})
  btn3.addEventListener("click",() => {show(3);})
  btn4.addEventListener("click",() => {show(4);})
  btn5.addEventListener("click",() => {show(5);})
  btn6.addEventListener("click",() => {show(6);})

  document.querySelector("#menuDropdownText").addEventListener("click" , () => {
    let menu= document.querySelector("#embedPdf");
    let time = document.querySelector(".time");
    if (window.getComputedStyle(time).display == "block") {
      console.log(menu.style.display);
      menu.style.display = "block";
      time.style.display = "none" ;
      console.log("menu displayed");
    }
    else{
      console.log(menu.style.display);
      menu.style.display = "none";
      time.style.display = "block" ;
      console.log("menu hidden");
    }
  })

  document.querySelector("#menuDropdownText").addEventListener("click" , () => {
    let backward= document.querySelector("#backward");
    let forward = document.querySelector("#forward");
    if (window.getComputedStyle(forward).display == "block") {
      console.log(window.getComputedStyle(forward).display) ;
      backward.style.display = "block";
      forward.style.display = "none" ;
    }
    else{
      backward.style.display = "none";
      forward.style.display = "block" ;
    }
  })
