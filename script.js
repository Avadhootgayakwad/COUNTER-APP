// counter app

document.addEventListener("counter",init);

let count = Number(sessionStorage.getItem("count"))||0;

function init(){
    document.getElementById("count").textContent=count;
}
function increaseCount(){
    count++;
    updateCount();
}
function decreaseCount() {
    count--;
    updateCount();
}
function resetCount(){
    count=0;
    updateCount();
}
function updateCount(){
    document.getElementById("count").textContent=count;
    sessionStorage.setItem("count",count);
}