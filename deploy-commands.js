const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.js');

const commands = [
    new SlashCommandBuilder().setName('nelson').setDescription('Replies with Nelson!'),
    new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    new SlashCommandBuilder().setName('calcula').setDescription('Calcula o valor de uma expressão matemática'),
    new SlashCommandBuilder().setName('recomendacao').setDescription('Recomenda um filme ou série SUSPEITO!'),
    new SlashCommandBuilder().setName('bbq').setDescription('Random Breaking Bad Quote'),
    new SlashCommandBuilder().setName('gama').setDescription('Imagem aleatória de Alan Gama'),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);