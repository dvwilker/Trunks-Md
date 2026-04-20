import axios from 'axios'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix }) => {
  try {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let userData = global.db.data.users[userId] || {}
    let exp = userData.exp || 0
    let coin = userData.coin || 0
    let level = userData.level || 0
    let role = userData.role || 'Sin Rango'
    let name = await conn.getName(userId)

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.keys(global.plugins).length

    let fechaObj = new Date()
    let hora = new Date().toLocaleTimeString('es-PE', { timeZone: 'America/Lima' })
    let fecha = fechaObj.toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Lima' })
    let dia = fechaObj.toLocaleDateString('es-PE', { weekday: 'long', timeZone: 'America/Lima' })
    
    let videos = [
        'https://qu.ax/y8TdN',
        'https://qu.ax/lNfAb',
        'https://qu.ax/mArAY',
        'https://qu.ax/59rtt',
        'https://qu.ax/GB8M7'
    ]
    let video = videos[Math.floor(Math.random() * videos.length)]
const emojis = {
  'main': '🐉', 'tools': '🌀', 'audio': '🎶', 'group': '🐉',
  'owner': '👑', 'fun': '🎮', 'info': '📘', 'internet': '🌐',
  'downloads': '⬇️', 'admin': '🧦', 'anime': '🐉', 'nsfw': '🚫',
  'search': '🔍', 'sticker': '🔪', 'game': '🕹️', 'premium': '💎', 'bot': '🤖'
}

let grupos = {}
for (let plugin of Object.values(global.plugins || {})) {
  if (!plugin.help || !plugin.tags) continue
  for (let tag of plugin.tags) {
    if (!grupos[tag]) grupos[tag] = []
    for (let help of plugin.help) {
      if (/^\$|^=>|^>/.test(help)) continue
      grupos[tag].push(`${usedPrefix}${help}`)
    }
  }
}

for (let tag in grupos) {
  grupos[tag].sort((a, b) => a.localeCompare(b))
}

const secciones = Object.entries(grupos).map(([tag, cmds]) => {
  const emoji = emojis[tag] || '🌀'
      return `╭━━🐉 ${tag.toUpperCase()} 🐉━⬣\n`
     + cmds.map(cmd => `┃ ➩ ${cmd}`).join('\n') 
     + `\n╰━🌀〔 🐉 〕🍃━⬣`
    }).join('\n\n')

let menuText = `
╔══════════════╗
 🌀 𝚃𝚁𝚄𝙽𝙺𝚂 𝙼𝙳 🐉
╚══════════════╝

${ucapan()} @${userId.split('@')[0]}

────────────────
👤 𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝚄𝚂𝙴𝚁
────────────────
👤 𝚄𝚂𝙴𝚁: ${name}
💎 𝙽𝙸𝚅𝙴𝙻: ${level}
🗿 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰: ${exp}
🐉 𝚁𝙰𝙽𝙶𝙾: 𝚂𝚄𝙿𝙴𝚁 𝚂𝙰𝙸𝚈𝙰𝙽

────────────────
🤖 𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃
────────────────
🐉 𝙾𝚆𝙽𝙴𝚁: wa.me/${suittag}
🎧 𝙴𝚂𝚃𝙰𝙳𝙾: ${(conn.user.jid == global.conn.user.jid ? '𝚂𝙰𝙸𝚈𝙰𝙽 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 🐉' : '𝚂𝙰𝙸𝚈𝙰𝙽 𝚂𝚄𝙱 𝙱𝙾𝚃 🌀')}
🎉 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂: ${totalCommands}
👥 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${totalreg}
⏳ 𝚄𝙿𝚃𝙸𝙼𝙴: ${uptime}

────────────────
⏰ 𝙵𝙴𝙲𝙷𝙰 𝚈 𝙷𝙾𝚁𝙰 
────────────────
🕝 𝙷𝙾𝚁𝙰: ${hora}
📅 𝙵𝙴𝙲𝙷𝙰: ${fecha}
🏙️ 𝙳𝙸𝙰: ${dia}
────────────────
𝚃𝚁𝚄𝙽𝙺𝚂 𝙼𝙳• 𝚂𝙸𝚂𝚃𝙴𝙼𝙰 𝙰𝙲𝚃𝙸𝚅𝙾
© 𝟸𝟶𝟸𝟻 - 𝟸𝟶𝟸𝟼 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙳𝚅𝚆𝙸𝙻𝙺𝙴𝚁 
────────────────
📂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂
────────────────
${secciones}
`.trim()

await m.react('🐉')

await conn.sendMessage(
  m.chat,
  {
    video: { url: video },
    caption: menuText,
    gifPlayback: true,
    gifAttribution: 0,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: 100,
        newsletterName: channelRD.name
      },
      externalAdReply: {
        title: botname,
        body: dev,
        thumbnailUrl: banner,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  },
  { quoted: m }
)

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, {
      text: `✘ Error al enviar el menú: ${e.message}`,
      mentions: [m.sender]
    }, { quoted: m })
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'allmenú', 'allmenu', 'menucompleto']
handler.register = true
export default handler

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}

function ucapan() {
  const time = moment.tz('America/Lima').format('HH')
  let res = "ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs 🐉"
  if (time >= 5 && time < 12) res = "ʙᴜᴇɴᴏs ᴅɪᴀs 🌀"
  else if (time >= 12 && time < 18) res = "ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs 🌀"
  else if (time >= 18) res = "ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs 🐉"
  return res
}
