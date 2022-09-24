const handleCommands = require('./handleCommands.js');
const handleMessage = require('./handleMessage.js');

const handleInteraction = async (interaction) => {
    console.log(interaction.isMessageComponent());
    if(interaction.isChatInputCommand()) {
        await handleCommands(interaction);
    }

    else if(interaction.isMessageComponent()) {
        await handleMessage(interaction);
    }
};

module.exports=handleInteraction;