const films = require('../films.json');
const getRandomAlanImg = require('./getRandomAlanImg');
const getRandomQuoteBB = require('./getRandomQuoteBB.js');



const handleCommands = async (interaction) => {

    const { commandName, user } = interaction;

    if(commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    else if(commandName === 'nelson') {
        await interaction.reply(`Nelson!, ${user.username}`);
    }
    else if (commandName === 'recomendacao') {
        await interaction.reply(`Nelsin Recomenda :sunglasses: -  ${films[Math.floor(Math.random() * films.length)].title}`);
    }
    else if (commandName === 'bbq') {
        const quoteWithAutor = await getRandomQuoteBB();
        await interaction.reply(`${quoteWithAutor.quote } - ${ quoteWithAutor.author }`);
    }
    else if (commandName === 'gama') {
        const alanImgPath = getRandomAlanImg();
        await interaction.reply({files: ['./database/alan-imgs/' + alanImgPath]});
    }
};

module.exports= handleCommands;