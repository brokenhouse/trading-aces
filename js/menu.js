let game_status = localStorage.getItem("game_status");
console.log(game_status);
let button;
if(!game_status){
    button = document.getElementById("free-packet-button");
} else {
    button = document.getElementById("go-to-collection-button");
    console.log(button);
}
console.log(button);
button.style.display = "block";
button.addEventListener("click", ()=>{
    window.location.replace("/trading-aces/collection.html");
})