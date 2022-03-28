export const TaxiRankApp = () => {
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
        console.log(rank);
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
                // else {
                //     return "disabled"
                // }
            }
        }
    }
    const newDestination = (destinationName) => {
        rank.push({
            destination: destinationName,
            queue: 0,
            departedTaxis: 0
        })
    }
    // const greyedOut = (destination) => {
    //     for (let i = 0; i < rank.length; i++) {
    //         if (destination == rank[i].destination) {
    //             if (rank[i].queue < 12) {
    //                 return "disabled"
    //             }
    //         }
    //     }
    // }
    const returnRankInfo = () => rank

    return {
        returnRankInfo,
        incrementQueue,
        decrementQueue,
        departTaxi,
        newDestination,
        // greyedOut
    }
}