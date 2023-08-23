require('dotenv').config()
const keepAlive = require("./server")

const { Client, Events, GatewayIntentBits } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('interactionCreate', async interaction => {
    // console.log(interaction)
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'play') {
      await interaction.reply(`<@${interaction.user.id}> to yek bedard nakhor hasti :)`);
    }
})

keepAlive()

client.login(process.env.DISCORD_TOKEN)