const { Command } = require('discord-akairo')
const { limits } = require('../../config.js')

class ResetCommand extends Command {
  constructor () {
    super('reset', {
      aliases: ['reset'],
      args: [
        {
          id: 'type'
        }
      ],
      channel: 'guild'
    })
  }

  async exec (message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) message.channel.send('***Sorry**, invalid permissions.*')

    switch ((args.type || '').toLowerCase()) {
      case 'firewall':
        message.guild.delete('limits')
        const embed = this.client.util.embed()
        .setColor('00c5e3')
        .setFooter('Made By MeTi.#0001', 'https://cdn.discordapp.com/avatars/791965942406053888/28b5f57d62c636672616d76ee2a71d0f.webp?size=1024');
        const prefix = message.guild.prefix
        embed.addField('**Done**', '__ __')
        message.channel.send(embed)
    }
  }
}

module.exports = ResetCommand
