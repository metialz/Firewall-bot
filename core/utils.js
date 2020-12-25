const parsems = require('parse-ms')

module.exports = class Utils {
  constructor (client) {
    this.client = client
  }

  toProperCase (str) {
    str = str.split('_')
    str = str.map(i => i.charAt(0).toUpperCase() + i.substring(1))
    return str.join(' ')
  }

  parseTime (ms, { fromNow = false, includeSeconds = false, base = '' } = {}) {
    const obj = (fromNow ? parsems(ms) : parsems(Date.now() - ms))
    for (const i in obj) {
      if (obj[i] === 0 || ['milliseconds', 'microseconds', 'nanoseconds'].includes(i) || (!includeSeconds && i === 'seconds')) continue
      base += `${obj[i]} ${(obj[i] === 1 ? i.slice(0, -1) : i)} `
    }
    return (!base ? 'Just Now' : base + 'ago')
  }

  convertActionTypeToDescription (type) {
    switch (type) {
      case 'CHANNEL_DELETE':
        return '**Deleted Channel**'
        break
      case 'CHANNEL_CREATE':
        return 'Created Channel'
        break
      case 'MEMBER_BAN_ADD':
        return 'Banned'
        break
      case 'MEMBER_KICK':
        return 'Kicked'
        break
      case 'MEMBER_REMOVE':
        return 'Removed'
        break
      case 'ROLE_CREATE':
        return 'Created Role'
        break
      case 'ROLE_DELETE':
        return 'Deleted Role'
        break
      case 'MEMBER_BAN_REMOVE':
        return 'Unbanned'
        break
      case 'EMOJI_CREATE':
        return 'Created Emoji'
      case 'EMOJI_DELETE':
        return 'Deleted Emoji'
    }
  }

  convertLimitNameToActionType (limit) {
    switch (limit) {
      case 'user_removals':
        return 'MEMBER_REMOVE'
        break
      case 'role_creations':
        return 'ROLE_CREATE'
        break
      case 'channel_creations':
        return 'CHANNEL_CREATE'
        break
      case 'role_deletions':
        return 'ROLE_DELETE'
        break
      case 'channel_deletions':
        return 'CHANNEL_DELETE'
        break
      case 'unbans':
        return 'MEMBER_BAN_REMOVE'
        break
      case 'emoji_creations':
        return 'EMOJI_CREATE'
        break
      case 'emoji_deletions':
        return 'EMOJI_DELETE'
        break
    }
  }

  convertEntries (entries) {
    if (!(entries instanceof Array)) entries = [entries]
    let str = ''
    for (let i = 0; i < entries.length; i++) str += `\`${this.client.Utils.parseTime(entries[i].timestamp)}\` | <@${entries[i].executor.id}> ${this.convertActionTypeToDescription(entries[i].action)} **${entries[i].target.displayName}**\n`
    return str
  }
}
