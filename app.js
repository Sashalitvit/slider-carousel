const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");

const CAROSEL = document.querySelector("#carosel");

const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

///функция
////
const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;

    return card;


}


BTN_LEFT.addEventListener("click", () => {
    CAROSEL.classList.add("transition-left")
});
BTN_RIGHT.addEventListener("click", () => {
    CAROSEL.classList.add("transition-right")
});

//событие вправо

CAROSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left"){
        CAROSEL.classList.remove("transition-left");
        const leftItems = ITEM_LEFT.innerHTML;

        document.querySelector("#item-active").innerHTML = leftItems;

        const card1 = createCardTemplate();
        card1.innerText =Math.floor(Math.random() *8)

        const card2 = createCardTemplate();
        card2.innerText =Math.floor(Math.random() *8)

        const card3 = createCardTemplate();
        card3.innerText =Math.floor(Math.random() *8)

        ITEM_LEFT.innerHTML = "";
        ITEM_LEFT.appendChild(card1);
        ITEM_LEFT.appendChild(card2);
        ITEM_LEFT.appendChild(card3);



    } else {
        CAROSEL.classList.remove("transition-right");
    }
})

// событие вправо

CAROSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-right"){
        CAROSEL.classList.remove("transition-right");
        const rightItems = ITEM_LEFT.innerHTML;

        document.querySelector("#item-active").innerHTML = rightItems;

        const card1 = createCardTemplate();
        card1.innerText =Math.floor(Math.random() *8)

        const card2 = createCardTemplate();
        card2.innerText =Math.floor(Math.random() *8)

        const card3 = createCardTemplate();
        card3.innerText =Math.floor(Math.random() *8)

        ITEM_RIGHT.innerHTML = "";
        ITEM_RIGHT.appendChild(card1);
        ITEM_RIGHT.appendChild(card2);
        ITEM_RIGHT.appendChild(card3);



    } else {
        CAROSEL.classList.remove("transition-left");
    }
})




