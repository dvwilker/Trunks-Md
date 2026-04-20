// by dv.shadow - https://github.com/Yuji-XDev
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { conn }) => {
  const name = 'Trunks - MD | ᥆𝖿𝖿іᥴіᥲᥣ';
  const numCreador = '5492644138998';
  const empresa = 'ɢᴏᴊᴏ ʙᴏᴛ ɪɴɪᴄ.';
  const about = '🐉 DESARROLLADOR OFICIAL DE TRUNKS - MD';
  const correo = 'developer.wilker.ofc@gmail.com';
  const api = 'https://api-gohan.onrender.com';
  const direccion = 'Venezuela, Caracas 🇻🇪';
  const fotoPerfil = 'https://iili.io/BrznQtV.jpg';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa}
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:${correo}
URL:${web}
NOTE:${about}
ADR:;;${direccion};;;;
X-ABADR:ES
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim();

  const contactMessage = {
    displayName: name,
    vcard
  };
  m.react('🐉');
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: name,
      contacts: [contactMessage]
    },
    contextInfo: {
    mentionedJid: [m.sender],
      externalAdReply: {
        title: '🌀 ƈσɳƚαƈƚσ ԃҽ ɱι ƈɾҽαԃσɾ •🌀',
        body: '',
        mediaType: 1,
        thumbnailUrl: fotoPerfil,
        renderLargerThumbnail: true,
        sourceUrl: web
      }
    }
  }, { quoted: fkontak });
};

handler.help = ['creador'];
handler.tags = ['info'];
handler.command = ['creador', 'creator', 'owner'];
export default handler;