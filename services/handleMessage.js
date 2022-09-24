
const handleMessage = async (interaction) => {

    const { message, user } = interaction;
    console.log(interaction);

    if(message.content.toLowerCase().contains('nelson')) {
        await interaction.reply(`Nelson!, ${user.username}`);
    };
};

module.exports= handleMessage;