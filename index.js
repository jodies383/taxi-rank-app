import {TaxiRankApp} from "./app.js"

const taxiRankApp = TaxiRankApp();
const template = document.querySelector(".taxiTemplate").innerHTML
const taxiTemplate = Handlebars.compile(template)
const destinations = document.querySelector(".destinations")

let displayDestinations = taxiTemplate({
    rank: taxiRankApp.returnRankInfo()
});
destinations.innerHTML = displayDestinations

const increment = document.querySelector(".queueUp")


increment.addEventListener('click', () => {
    destinations.innerHTML = ""
taxiRankApp.incrementQueue(increment.dataset.destination)

let displayDestinations = taxiTemplate({
    rank: taxiRankApp.returnRankInfo()
});

destinations.innerHTML = displayDestinations

})

