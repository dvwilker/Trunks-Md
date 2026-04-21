import yts from 'yt-search'
import axios from 'axios'

const handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply('🗡️ Ingresa nombre o link de YouTube, guerrero del tiempo')

  await m.react('⏳')

  let search = await yts(text)
  let video = search.videos[0]

  if (!video) return m.reply('❌ No se encontró el video en esta línea temporal')

  const info = `
🎬 *${video.title}*

🗡️ Canal: ${video.author.name}
⏳ Duración: ${video.timestamp}
👁 Vistas: ${video.views.toLocaleString()}
📅 Publicado: ${video.ago}
🌐 Link: ${video.url}
`.trim()

  await conn.sendMessage(m.chat, {
    image: { url: video.thumbnail },
    caption: info
  }, { quoted: m })

  if (command === 'playaudio') {
    try {
      const api = `https://api-gohan.onrender.com/download/ytaudio?url=${encodeURIComponent(video.url)}`
      const { data } = await axios.get(api)

      if (!data.status) throw 'Error al obtener audio del futuro'

      let fileUrl = ''
      let fileTitle = 'audio'
      
      if (data.result && data.result.download_url) {
        fileUrl = data.result.download_url
        fileTitle = data.result.title || 'audio'
      } else if (data.download_url) {
        fileUrl = data.download_url
        fileTitle = data.title || 'audio'
      } else if (data.url) {
        fileUrl = data.url
        fileTitle = data.title || 'audio'
      } else {
        throw 'No se encontró URL de descarga válida'
      }

      await conn.sendMessage(m.chat, {
        audio: { url: fileUrl },
        mimetype: 'audio/mpeg',
        fileName: `${fileTitle}.mp3`,
        ptt: false
      }, { quoted: m })

      await m.reply(`✅ Audio descargado del futuro\n🎼 Título: ${fileTitle}\n⏳ El poder de Trunks está en tus manos`)

    } catch (e) {
      console.log(e)
      m.reply('❌ Error dimensional al descargar el audio: ' + (e.response?.data?.message || e.message))
    }
  }

  if (command === 'playvideo') {
    try {
      const api = `https://api-gohan.onrender.com/download/ytvideo?url=${encodeURIComponent(video.url)}`
      const { data } = await axios.get(api)

      if (!data.status) throw 'Error al obtener video del futuro'

      let videoUrl = ''
      let videoTitle = ''
      let videoQuality = 'HD'

      if (data.result && data.result.download_url) {
        videoUrl = data.result.download_url
        videoTitle = data.result.title || video.title
        videoQuality = data.result.quality || 'HD'
      } else if (data.download_url) {
        videoUrl = data.download_url
        videoTitle = data.title || video.title
        videoQuality = data.quality || 'HD'
      } else if (data.url) {
        videoUrl = data.url
        videoTitle = data.title || video.title
      } else {
        throw 'No se encontró URL de descarga válida'
      }

      await conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: `🎥 ${videoTitle}\n🗡️ Calidad: ${videoQuality}\n⏳ Trunks MD - Poder del futuro`
      }, { quoted: m })

    } catch (e) {
      console.log(e)
      m.reply('❌ Error dimensional al descargar el video: ' + (e.response?.data?.message || e.message))
    }
  }

  await m.react('✅')
}

handler.command = ['play', 'ytvideo', 'traudio', 'trvideo', 'trunksplay']
handler.help = ['play <texto>', 'play2 <texto>']
handler.tags = ['descargas']

export default handler