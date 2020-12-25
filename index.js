require('dotenv').config()

const GuardianClient = require('./core/client.js')
const client = new GuardianClient()
const approx = require('approximate-number')

client.login(process.env.token)

client.on('ready', function () {
  client.user.setActivity(`${client.guilds.cache.size} Servers || /*help`, { type: 'PLAYING', url: 'https://www.twitch.tv/fs' })

  console.log('FireWall Is Ready!')
})

const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')

client.on('guildMemberAdd', async member => {
  if (member.user.bot) {
    // (member.ban("Suspicous Bot Detected, Not Acceptable."));
    (console.log(`Blacklisted bot has been banned, ${member.user.tag}!`))
  }
})
