var fs = require('fs');
var files = fs.readdirSync('./database/alan-imgs');



const getRandomAlanImg = () => {
    let chosenFile = files[Math.floor(Math.random() * files.length)] 
    return chosenFile;
};

module.exports=getRandomAlanImg;
