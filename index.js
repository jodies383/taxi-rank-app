import { TaxiRankApp } from "./app.js"

const taxiRankApp = TaxiRankApp();
const template = document.querySelector(".taxiTemplate").innerHTML
const taxiTemplate = Handlebars.compile(template)
const destinations = document.querySelector(".destinations")
const departTaxi = document.querySelector(".depart")
let displayDestinations = taxiTemplate({
    rank: taxiRankApp.returnRankInfo()
});
destinations.innerHTML = displayDestinations

const increment = document.querySelector(".queueUp")
const decrement = document.querySelector(".queueDown")


destinations.addEventListener('click', (e) => {
    console.log(e.target.dataset.destination);
    if (e.target.name === "plus") {
        taxiRankApp.incrementQueue(e.target.dataset.destination)
    } else if (e.target.name === "minus") {
        taxiRankApp.decrementQueue(e.target.dataset.destination)
    } else if (e.target.name === "departed") {
        taxiRankApp.departTaxi(e.target.dataset.destination)
    }

    let displayDestinations = taxiTemplate({
        rank: taxiRankApp.returnRankInfo()
    });
    destinations.innerHTML = displayDestinations

})

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
