const search = document.querySelector("#search");
const divs = document.querySelectorAll(".home");

search.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display="none");
    })
    
})

function saleCountdown() {
    const dateSale = new Date("March 26, 2026 00:00")
    const newDate = new Date();
    const daysNow = dateSale - newDate;

    const msInSecond = 1000; 
    const msInMinute = 60000;  
    const msInHour = 3600000;
    const msInDay = 86400000;

    const displayDay = Math.floor(daysNow/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((daysNow%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinutes = Math.floor((daysNow%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;
    
    const displaySecond = Math.floor((daysNow%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (daysNow <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(sale);
        saleOpen();
       
    }




}

    
let sale = setInterval(saleCountdown, 1000);


function saleOpen (){
const header = document.querySelector("h4");
header.textContent = "Акция закончена!!! Поздравляем с покупками!!!";
}


