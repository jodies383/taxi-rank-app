import {TaxiRankApp} from "./app.js"
const taxiRankApp = TaxiRankApp();
const template = document.querySelector(".taxiTemplate").innerHTML
const taxiTemplate = Handlebars.compile(template)
const destinations = document.querySelector(".destinations")
const increment = document.querySelector(".queueUp")
let displayDestinations = taxiTemplate({
    rank: taxiRankApp.returnRankInfo()
});

increment.addEventListener('click', () => {
    alert("works")
taxiRankApp.incrementQueue()
})
console.log(increment);
destinations.innerHTML = displayDestinations
//make button work in handlebars script
//increment only queues linked to destinations