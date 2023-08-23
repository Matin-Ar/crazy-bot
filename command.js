require('dotenv').config()

const { REST, Routes } = require('discord.js')

const commands = [
  {
    name: 'play',
    description: 'Play music !',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

const test = async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(process.env.APP_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
}

test()