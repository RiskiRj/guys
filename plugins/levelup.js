let fetch = require('node-fetch')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
  let pp = 'https://telegra.ph/file/e891ab641d5d71c70d938.png'
  let who = m.sender
  let name = conn.getName(m.sender)
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
        {
          await conn.sendBL(m.chat, `${sa}${kki} To Level Up ${kka}\n${gy} Name: *${name}*\n${gy} Level: *${user.level}*\n${gy} XP: ( *${user.exp - min}/${xp}* )\n${gy} Not enough *${max - user.exp}* XP level up song!\n${sb}`.trim(), wm, pp, [['On Autolevelup', `${usedPrefix}on autolevelup`]], m)
        }
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        {
          await conn.sendBL(m.chat, `${sa}${kki} Level Up ${kka}\n${gy} Name: *${name}*\n${gy} Level previously: *${before}*\n${gy} Current level: *${user.level}*\n${sb}\n\nThe more interactions with the *BOT* the easier it is to level up!`.trim(), wm, pp, [['Claim', `${usedPrefix}claim`]], m)
        }
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.command = /^levelup$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
