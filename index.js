require('dotenv').config();
const handleInteraction = require('./services/handleInteraction.js');

const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env.DISCORD_BOT_TOKEN;

const client  = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.once('ready', () => {
    console.log('Nelsin STARTED');
});


// handle interactions
client.on('interactionCreate', async interaction => handleInteraction(interaction));
client.on('messageCreate', async message => console.log('2', message.content));


client.login(token);

