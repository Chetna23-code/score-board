let scoreHome=document.getElementById("countHome")
let scoreGuest=document.getElementById("countGuest")
let ctnHome = 0
let ctnGuest=0


function plusOneHome(){
   ctnHome +=1
   scoreHome.textContent=  ctnHome
}

function plusTwoHome(){
   ctnHome +=2
   scoreHome.textContent=  ctnHome
}

function plusThreeHome(){
   ctnHome +=3
   scoreHome.textContent=  ctnHome
}



function plusOneGuest(){
   ctnGuest +=1
   scoreGuest.textContent= ctnGuest
}

function plusTwoGuest(){
   ctnGuest +=2
   scoreGuest.textContent= ctnGuest
}

function plusThreeGuest(){
   ctnGuest+=3
   scoreGuest.textContent= ctnGuest
}


