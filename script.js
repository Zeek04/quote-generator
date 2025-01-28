const quoteBox = document.getElementById("quote-container")
const button = document.getElementById('button')
const apiKey = 'API_KEY'

button.addEventListener('click', async () => {

    try{
        const response = await fetch ('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch quote')
        }

        const data = await response.json()

        displayQuote(data[0])
        console.log(data)
    } catch(error){
        
    }

})

function displayQuote(quote) {
    quoteBox.innerHTML = `
    <p>Author: ${quote.author}</p>
    <p>${quote.quote}</p>
    `
}