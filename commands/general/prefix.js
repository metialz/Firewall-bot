const { Command } = require('discord-akairo')

class PrefixCommand extends Command {
  constructor () {
    super('prefix', {
      aliases: ['prefix'],
      args: [
        {
          id: 'prefix'
        }
      ],
      channel: 'guild'
    })
  }

  async exec (message, args) {
    // Fetch the stored prefix
    const prefix = message.guild.prefix
    const embed = this.client.util.embed()
    const embed2 = this.client.util.embed()
    // Return with the current prefix if none in arguments
    embed.setColor('00c5e3')
    embed.addFields(
      { name: `The prefix is currently ${prefix}`, value: `You can change it by doing ${prefix}prefix <prefix>`, inline: false }
  	)
    embed.setFooter('Made By MeTi.#0001', 'https://cdn.discordapp.com/avatars/791965942406053888/28b5f57d62c636672616d76ee2a71d0f.webp?size=1024')
    if (!args.prefix) return message.channel.send(embed)

    // Check guild administrator permission
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('***Sorry**, invalid permissions.*')

    // Check if similar prefix
    if (prefix === args.prefix) return message.channel.send('***Sorry**, that is already the prefix.*')

    // Update the prefix
    message.guild.set('prefix', args.prefix)

    // Return with the updated prefix
    embed2.setColor('00c5e3')
    embed2.addFields(
      { name: `Successfully changed the prefix from ${prefix} to ${args.prefix} `, value: '__ __', inline: false }
  	)
    embed2.setFooter('Made By MeTi.#0001', 'https://cdn.discordapp.com/avatars/791965942406053888/28b5f57d62c636672616d76ee2a71d0f.webp?size=1024')
    return message.channel.send(embed2)
  }
}

module.exports = PrefixCommand
