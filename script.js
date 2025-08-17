
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
