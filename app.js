export const TaxiRankApp = () => {
    let warning = ""
    let rank = [{
        destination: "Makhaza",
        queue: 12,
        departedTaxis: 0
    },
    {
        destination: "Belhar",
        queue: 34,
        departedTaxis: 0
    },
    {
        destination: "Bellville",
        queue: 23,
        departedTaxis: 0
    }]
    if (localStorage['destination']) {
        rank = JSON.parse(localStorage.getItem('destination'));

    }
    const incrementQueue = (destination) => {
        for (let i = 0; i < rank.length; i++) {
            if (destination == rank[i].destination) {
                (rank[i].queue++);
                localStorage.setItem('destination', JSON.stringify(rank));
            }
        }
    }
    const decrementQueue = (destination) => {
        for (let i = 0; i < rank.length; i++) {
            if (destination == rank[i].destination) {
                if (rank[i].queue > 0) {
                    (rank[i].queue--);
                    localStorage.setItem('destination', JSON.stringify(rank));

                }
            }
        }
    }
    const departTaxi = (destination) => {
        for (let i = 0; i < rank.length; i++) {
            if (destination == rank[i].destination) {
                if (rank[i].queue >= 12) {
                    (rank[i].queue = 0),
                        (rank[i].departedTaxis++)
                    localStorage.setItem('destination', JSON.stringify(rank));

                }
                else {
                    warning = "Taxi needs at least 12 people to depart"
                }
            }
        }
    }
    const newDestination = (destinationName) => {
        if (destinationName) {
            rank.push({
                destination: destinationName,
                queue: 0,
                departedTaxis: 0
            })
            localStorage.setItem('destination', JSON.stringify(rank));
        }
    }
    const greyedOut = (button) => {
        for (let i = 0; i < rank.length; i++) {
            // if (destination == rank[i].destination) {
                if (rank[i].queue < 12) {
                    return button.disabled = true
                // }
            }
        }
    }
    const returnRankInfo = () => rank
    const returnWarning = () => warning

    return {
        returnRankInfo,
        incrementQueue,
        decrementQueue,
        departTaxi,
        newDestination,
        greyedOut,
        returnWarning
    }
}