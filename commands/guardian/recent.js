const { Command } = require('discord-akairo')

class RecentCommand extends Command {
  constructor () {
    super('recent', {
      aliases: ['recent'],
      args: [
        {
          id: 'ID'
        }
      ],
      channel: 'guild'
    })
  }

  async exec (message, args) {
    const embed = this.client.util.embed()
      .setColor('00c5e3')
      .setFooter('Made By MeTi.#0001', 'https://cdn.discordapp.com/avatars/791965942406053888/28b5f57d62c636672616d76ee2a71d0f.webp?size=1024')
      .setTitle('FireWall | RecentActions')
    const actions = message.guild.getActions(args.ID ? i => i.executor.id === args.ID || (i.target && (i.target.id === args.ID)) : undefined)
    for (const k in actions) embed.addField(`${actions[k].name} (${(actions[k].actions || '').split('\n').length - 1})`, actions[k].actions || 'No entries.')

    message.channel.send(embed)
  }
}

module.exports = RecentCommand
