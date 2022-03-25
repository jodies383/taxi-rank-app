export const TaxiRankApp = () =>{
    let rank = [{
        destination: "Makhaza",
        queue: 12
    },
    {
        destination: "Belhar",
        queue: 34
    },
    {
        destination: "Bellville",
        queue: 23
    }]

    const incrementQueue = (destination) => {
        for (let i = 0; i < rank.length; i++) {
           if (destination == rank[i].destination){
           (rank[i].queue++); 
            }
        }
        console.log(rank);
    }
    const decrementQueue = () => {

    }
    const returnRankInfo = () => rank

    return{
        returnRankInfo,
        incrementQueue,
        decrementQueue
    }
}