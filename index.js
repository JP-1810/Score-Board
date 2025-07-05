let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let h=parseInt(homeEl.innerText)
let g =parseInt(guestEl.innerText)
function plus1h(){
h+=1
homeEl.innerText=h
}
function plus2h(){
  h+=2
homeEl.innerText=h 
}
function plus3h(){
  h+=3
homeEl.innerText=h 
}

function plus1g(){
g+=1
guestEl.innerText=g
}
function plus2g(){
  g+=2
guestEl.innerText=g
}
function plus3g(){
  g+=3
guestEl.innerText=g
}