import { TaxiRankApp } from "./app.js"

const taxiRankApp = TaxiRankApp();
const template = document.querySelector(".taxiTemplate").innerHTML
const taxiTemplate = Handlebars.compile(template)
const destinations = document.querySelector(".destinations")
const departTaxi = document.getElementById("depart")
let displayDestinations = taxiTemplate({
    rank: taxiRankApp.returnRankInfo()
});
const saveBtn = document.getElementById('save')
const destinationInput = document.getElementById('usr')
const warn = document.querySelector(".warn")
destinations.innerHTML = displayDestinations

const increment = document.querySelector(".queueUp")
const decrement = document.querySelector(".queueDown")

// taxiRankApp.greyedOut(departTaxi)
destinations.addEventListener('click', (e) => {
    if (e.target.name === "plus") {
        taxiRankApp.incrementQueue(e.target.dataset.destination)
    } else if (e.target.name === "minus") {
        taxiRankApp.decrementQueue(e.target.dataset.destination)
    } else if (e.target.name === "departed") {
        taxiRankApp.departTaxi(e.target.dataset.destination)
        warn.innerHTML = taxiRankApp.returnWarning()
        //fix warning message showing up at the wrong time
        if (taxiRankApp.greyedOut(e.target.dataset.destination) === true){
            warn.classList.remove("alert")
            warn.classList.remove("alert-warning")
            console.log(taxiRankApp.greyedOut(e.target.dataset.destination));
        }
        warn.classList.add("alert")
        warn.classList.add("alert-warning")
        setTimeout(() => { warn.innerHTML = "" }, 2000);
        setTimeout(() => { warn.classList.remove("alert") }, 2000);
        setTimeout(() => { warn.classList.remove("alert-warning") }, 2000);

    }

    let displayDestinations = taxiTemplate({
        rank: taxiRankApp.returnRankInfo()
    });
    destinations.innerHTML = displayDestinations

})


saveBtn.addEventListener('click', () => {
    taxiRankApp.newDestination(destinationInput.value)
    let displayDestinations = taxiTemplate({
        rank: taxiRankApp.returnRankInfo()
    });
    destinations.innerHTML = displayDestinations
})

