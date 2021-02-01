# FireWall
FireWall Anti Nuke, a purpose built anti-nuke Discord bot.

#### FireWall

FireWall allows server owners to set strict limits on administration actions. These actions include: bans, kicks, channel creations/deletions, and role creations/deletions. Once these limits are met, their Discord permissions are automatically revoked via removing all of their roles.

---

#### Setup

*Requires Node v12 for discord.js*

**1.** Add `token` property to a .env file

**2.** Configure `config.js` to your personal preferences

**3.** Run `npm start` to start the bot

**4.** Ensure the highest role the bot has is higher than others so it can remove their roles

---

#### Commands

*You can mention the bot instead of using a prefix*

**`/*prefix [prefix]`** Displays the current prefix, changes the prefix if specified

**`/*limits [index] [value]`** Displays the limits, changes an index's value if specified

**`/*reset [type]`** Resets the specified data or collection

**`/*recent [ID]`** Displays recent moderation actions that can trigger the bot's limits

---
