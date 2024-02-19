let count = 0;

/* Calling click event of seat button section */
document.getElementById("ticket-seats").addEventListener('click', (event)=>{
    /* Checking seat count */
    count++;

    /* Checking how seats have booked */

    if(count < 5){

        /* Adding Background Color to the seat buttons */

        const pressedSeat = event.target.innerText;

        const seatId  = document.getElementById(pressedSeat);
    
        seatId.classList.add("bg-[#1DD100]");
        seatId.classList.add("text-white");


        /* Showing how many seats are available*/
        const availableSeats = seatCounter("availableSeats");

        let seatLeft = availableSeats-1;

        replaceValue("availableSeats", seatLeft)

        /* Showing  how many seats have selected*/
        replaceValue("seatCount", count);

        /* Showing Selected seat information */
        selectedSeatInfo("slectedTicketInfo", pressedSeat);

        /* showing the total price */
        let totalAmount = 550*count;

        document.getElementById("totalPrice").innerText = totalAmount;


        /* Setting Grand Total price using cupon */

       document.getElementById("apply-cupon").addEventListener('click', ()=>{
            const cuponInput = document.getElementById("cuponInput").value;

            const new15 = getTextElement("new15");
            const couple20 = getTextElement("couple20");

            let grandTotal = 0;

            if(new15 === cuponInput){
                grandTotal = totalAmount - (totalAmount*0.15);
            }

            else if(couple20 === cuponInput){
                grandTotal = totalAmount - (totalAmount*0.2);

            } 
            else{
                grandTotal = totalAmount;
            }  

            replaceValue("grandTotal", grandTotal);

            const cuponSection = document.getElementById("cupon-section");

            cuponSection.classList.add("hidden");
            
       })

    }
   

})


/* making the whole page hidden */

const phoneNumber = document.getElementById("phone-number").value;
const nextPage = document.getElementById("next-page");

    nextPage.addEventListener("click", ()=>{
       document.getElementById("header-hide").classList.add("hidden");
       document.getElementById("main-hide").classList.add("hidden");
       document.getElementById("footer-hide").classList.add("hidden");

       document.getElementById("show-main").classList.remove("hidden");
    })




/* Getting Element from the text field */

function getTextElement(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;

    return text; 
}


/* Calling an element and replacing with new value */

function replaceValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


/* Calling the seat count and converting it to integer */

function seatCounter(elementId){
    const element = document.getElementById(elementId);
    const seatCount = parseInt(element.innerText);

    return seatCount;
}


/* Selected Seat Information */

function selectedSeatInfo(elementId, value){
    const slectedTicketInfo = document.getElementById(elementId);

    const div = document.createElement("div");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p.innerText = value;
    p2.innerText = "Economy";
    p3.innerText = "550";

    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("text-center");
    div.classList.add("mt-2");
    div.classList.add("ml-2");

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);

    slectedTicketInfo.appendChild(div);

}