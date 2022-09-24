const axios = require('axios');


async function getRandomQuoteBB() {
    const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
    .catch(error => console.log(error));
    return {quote: response.data[0].quote, author: response.data[0].author};
}

module.exports=getRandomQuoteBB;