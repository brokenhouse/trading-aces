const size = 24;
let game_status = JSON.parse(localStorage.getItem("game_status"));

if(!game_status){
    game_status = new Array();
    for(let i = 0; i < size; i++){
        game_status.push(false);
    }
    game_status[1] = true;
    game_status[5] = true;
    game_status[6] = true;
    game_status[11] = true;
    game_status[12] = true;
    game_status[15] = true;
    localStorage.setItem("game_status", JSON.stringify(game_status));
    localStorage.setItem("card_codes", JSON.stringify([
        {
            code: "0",
            id: 0,
        },
        {
            code: "2",
            id: 2,
        },
        {
            code: "3",
            id: 3,
        },
        {
            code: "4",
            id: 4,
        },
        {
            code: "7",
            id: 7,
        },
        {
            code: "8",
            id: 8,
        },
        {
            code: "9",
            id: 9,
        },
        {
            code: "10",
            id: 10,
        },
        {
            code: "13",
            id: 13,
        },
        {
            code: "14",
            id: 14,
        },
        {
            code: "16",
            id: 16,
        },
        {
            code: "17",
            id: 17,
        },
        {
            code: "18",
            id: 18,
        },
        {
            code: "19",
            id: 19,
        },
        {
            code: "20",
            id: 20,
        },
        {
            code: "21",
            id: 21,
        },
        {
            code: "22",
            id: 22,
        },
        {
            code: "23",
            id: 23,
        },
    ]));
}
let card_codes = JSON.parse(localStorage.getItem("card_codes"));

const card_container = document.querySelector(".cards-container");
console.log(card_container);
for(let i = 0; i < size; i++){
    let card = document.createElement("div");
    card.className = "collection-card";
    if(game_status[i]){
        card.className += " found";
    }
    card.innerHTML = i+1;

    card_container.appendChild(card);
}