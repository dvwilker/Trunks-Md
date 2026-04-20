const handler = async (m, { conn, args, command }) => {
  const senderNumber = m.sender.split('@')[0];

  if (['quieropene'].includes(command)) {
    if (!global.db.data.users[m.sender]) {
      global.db.data.users[m.sender] = { 
        lastclaim: 0,
        coin: 0,
        exp: 0,
        joincount: 0
      };
    }

    const user = global.db.data.users[m.sender];
    const cooldown = 86400000; // 24 horas
    const now = Date.now();
    const timeRemaining = user.lastclaim + cooldown - now;

    if (timeRemaining > 0) {
      return conn.reply(
        m.chat,
        `🕒 *Ya reclamaste tu recompensa*\n\n⌛ Vuelve en: *${msToTime(timeRemaining)}*`,
        m
      );
    }

    // 🔥 NUEVAS RECOMPENSAS
    const rewardCoins = 10000000; // monedas
    const rewardExp = 100;        // experiencia
    const rewardTokens = 5;       // tokens

    user.coin += rewardCoins;
    user.exp += rewardExp;
    user.joincount += rewardTokens;
    user.lastclaim = now;

    const senderName = await conn.getName(m.sender);

    const texto = `
╭━━━〔 🎁 RECOMPENSA 💰 〕━━⬣ 
│ 
│ 🗿 *Usuario:* @${senderNumber}
│ 🗣️ *Nombre:* ${senderName}
│ 
│ 💫 *Has recibido:*
│ 💶 *${rewardCoins.toLocaleString()} Dolares 💶*
│ 🧠 *${rewardExp.toLocaleString()} XP*
│ 🥭 *${rewardTokens.toLocaleString()} Tokens*
│ 
│ 🕒 Próximo reclamo: *24 horas*
│ 
╰━━━〔 💫 TRUNKS - MD 🗿 〕━━⬣
`;

    await conn.sendMessage(
      m.chat,
      {
        text: texto,
        mentions: [m.sender],
        contextInfo: {
          externalAdReply: {
            title: '🎁 Recompensa de Trunks Md',
            body: 'Tus recompensas han sido entregadas!',
            thumbnailUrl: 'https://iili.io/BrznQtV.jpg',
            sourceUrl: 'https://github.com/dvwilker',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      },
      { quoted: m }
    );
  }
};

handler.help = ['recompensa'];
handler.tags = ['rpg'];
handler.command = ['recompensa'];
handler.group = true;

export default handler;

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / 60000) % 60);
  let hours = Math.floor((duration / 3600000) % 24);
  let days = Math.floor(duration / 86400000);
  return `${days ? days + 'd ' : ''}${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm ' : ''}${seconds}s`;
}
