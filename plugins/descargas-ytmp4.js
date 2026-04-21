import yts from 'yt-search'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text?.trim())
      return conn.reply(
        m.chat,
        `🗡️ Ingresa el nombre del video a buscar, guerrero del tiempo.\n\n> Ejemplo: ${usedPrefix + command} Rick Astley`,
        m
      )

    const search = await yts(text)
    const video = search.videos[0]
    if (!video) return conn.reply(m.chat, '❌ No se encontró el video en esta línea temporal.', m)

    const { title, duration, author, ago, url, views, thumbnail } = video

    const caption =
      `*🎬 Título:* ${title}\n` +
      `*⏳ Duración:* ${duration}\n` +
      `*🗡️ Canal:* ${author.name}\n` +
      `*📅 Publicado:* ${ago}\n` +
      `*👀 Vistas:* ${views.toLocaleString()}\n` +
      `*🌐 Link:* ${url}\n\n` +
      `⏳ Descargando video del futuro...\n\n` +
      `     ✧━『 𝚃𝚁𝚄𝙽𝙺𝚂 𝙼𝙳 』━✧\n` +
      `    🗡️ _𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝚃𝚛𝚞𝚗𝚔𝚜_ 🗡️`

    await conn.sendMessage(
      m.chat,
      { image: { url: thumbnail }, caption },
      { quoted: m }
    )

    const apiUrl = `https://api-gohan.onrender.com/download/ytvideo?url=${encodeURIComponent(url)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status)
      return conn.reply(m.chat, '❌ No se pudo descargar el video de esta dimensión.', m)

    const videoUrl = json.result?.download_url || json.download_url || json.url
    const safeTitle = (json.result?.title || json.title || title).replace(/[\\/:"*?<>|]/g, '')
    const quality = json.result?.quality || json.quality || 'HD'

    const head = await fetch(videoUrl, { method: 'HEAD' })
    const contentLength = head.headers.get('content-length')
    const sizeMB = contentLength ? Number(contentLength) / 1024 / 1024 : 0

    if (sizeMB > 100) {
      await conn.sendMessage(
        m.chat,
        {
          document: { url: videoUrl },
          mimetype: 'video/mp4',
          fileName: safeTitle,
          caption: `🗡️ *${title}*\n⏳ Video grande (${sizeMB.toFixed(2)} MB)\n📺 Calidad: ${quality}\n\n✨ El poder del futuro está en tus manos`
        },
        { quoted: m }
      )
    } else {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: videoUrl },
          mimetype: 'video/mp4',
          fileName: safeTitle,
          caption: `🗡️ *${title}*\n📺 Calidad: ${quality}\n⏳ Trunks MD - Poder del futuro`
        },
        { quoted: m }
      )
    }

    await m.react('✅')
  } catch (e) {
    console.error(e)
    conn.reply(m.chat, '⚠️ Ocurrió un error dimensional al buscar o descargar el video.', m)
  }
}

handler.help = ['ytmp4 <texto>']
handler.tags = ['download']
handler.command = ['ytmp4', 'trvideo', 'trmp4']

export default handler