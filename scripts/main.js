fetch('https://randomfox.ca/floof')
    .then(response=>response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src= convertedData.image
        }
    )
   

const getTheCat = async () => {
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    const convertedData = await response.json()

    const catImgElement = document.querySelector("#cat")
    catImgElement.src = convertedData[0]
}
getTheCat()






    /*
    Define a function to get the cat data over the Web.
    Because the function contains the `await` keyword, then
    the function must be marked as `async`.
*/
// const getTransaction = async () => {
//     const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
//     const convertedData = await response.json()
//     const transaction = `Order ${convertedData.odr_id} is currently ${convertedData.odr_status}`

//     return transaction
// }

// // Then invoke the asynchronous function to get the cat data
// getTransaction()