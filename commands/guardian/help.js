const { Command } = require('discord-akairo')
const now = new Date()

class HelpCommand extends Command {
  constructor () {
    super('commands', {
      aliases: ['commands', 'help'],
      channel: 'guild'
    })
  }

  async exec (message) {
    const embed = this.client.util.embed()
    const prefix = message.guild.prefix
    embed.setColor('00c5e3')
    embed.setThumbnail('https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Security-Checkup_F1xsrhr.gif')
    embed.setAuthor(' FireWall | informaton')
    embed.setDescription('__> **Default Prefix is : /* **__')
    embed.addFields(
    { name: '\u200B', value: '__ __', inline: false },
    { name: '__> **FireWall Commands**__', value: '__ __', inline: false },
		{ name: '/*Limits', value: 'Displays the limits', inline: false },
    { name: '/*anti <number in the limits> <value>', value: 'Change The Limits', inline: false },
		{ name: '/*recent', value: 'Displays recent moderation actions that can trigger the bots limits', inline: false },
    { name: '/*reset firewall', value: 'Resets Limits to The Default', inline: false },
    { name: '/*prefix <new prefix>', value: 'Change Prefix', inline: false },
    { name: '\u200B', value: '__ __', inline: false },
    { name: '__> **Bot Info :**__', value: 'The FireWall is already on and securing the server once it joins the server. Nothing else needs to be done. Also dont be an idiot and give out administrator to a bunch of people. Join Support Server for more info.', inline: false },
    { name: '\u200B', value: '__ __', inline: false },
    { name: '__> **Beta Version**__', value: 'Still in development so text me if there is bugs', inline: false },
		{ name: '\u200B', value: '\u200B' },
		{ name: '**Invite**', value: '[invite link](https://discord.com/api/oauth2/authorize?client_id=791965942406053888&permissions=8&scope=bot)', inline: true },
		{ name: '**Support**', value: '[Support Server](https://discord.gg/Zqk3AvEHHr)', inline: true },
  	)
    embed.setFooter('Made By MeTi.#0001', 'https://cdn.discordapp.com/avatars/791965942406053888/28b5f57d62c636672616d76ee2a71d0f.webp?size=1024');
    message.channel.send(embed)
  }
}

module.exports = HelpCommand
