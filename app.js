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

    const incrementQueue = () => {
        for (let i = 0; i < rank.length; i++) {
           console.log(rank[i].queue++); 
            
        }
      
         
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