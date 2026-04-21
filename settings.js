import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

// CONFIGURACIÓN TRUNKS MD - MODO VIAJERO DEL TIEMPO
// Si quieres evitar escribir el número que será bot en la consola, agrégalo aquí:
// Solo aplica para opción 2 (ser bot con código de texto de 8 dígitos)
global.botNumber = "" // Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = ["5492644138998", "584125877491", "584162060060"]
global.suittag = ["5492644138998"] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = "Baileys Multi Device"
global.vs = "^1.8.2 • Latest"
global.nameqr = "⚡ 𝚃𝚁𝚄𝙽𝙺𝚂-𝙼𝙳 ⚡"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.kanekiAIJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botname = "⚡ 𝗧𝗿𝘂𝗻𝗸𝘀 𝗠𝗗 ✨"
global.textbot = "⚡ 𝚃𝚁𝚄𝙽𝙺𝚂 𝙼𝙳 • 𝙼𝙾𝙳𝙾 𝚅𝙸𝙰𝙹𝙴𝚁𝙾 𝙳𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 ⏳"
global.dev = "© ⚡ 𝙿𝙾𝙳𝙴𝚁𝙰𝙳𝙾 𝙿𝙾𝚁 𝚃𝚁𝚄𝙽𝙺𝚂 - 𝙳𝚁𝙰𝙶𝙾𝙽 𝙱𝙰𝙻𝙻 ⏳"
global.author = "© 𝙲𝚁𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙿𝙾𝙳𝙴𝚁 𝙳𝙴𝙻 𝙵𝚄𝚃𝚄𝚁𝙾"
global.etiqueta = "⚡𝚃𝚁𝚄𝙽𝙺𝚂⚡"
global.currency = "⏳ 𝚌𝚛𝚘𝚗𝚘𝚌𝚛𝚎𝚍𝚒𝚝𝚘𝚜 ⏳"
global.banner = "https://iili.io/Bg8Jm4n.jpg"
global.icono = "https://iili.io/Bg8dfC7.jpg"
global.catalogo = fs.readFileSync('./lib/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = "https://chat.whatsapp.com/BsxkUgzuV8aEvQ1Z7xOEXp?mode=gi_t"
global.community = "https://chat.whatsapp.com/HYcKNQtGxaBGlWY1mmcyq1"
global.channel = "https://whatsapp.com/channel/0029Vb7ntULLY6d8uOvyDy0C"
global.github = "https://github.com/dvwilker/Trunks-Md"
global.gmail = "developer.wilker.ofc@gmail.com"
global.ch = {
ch1: "120363404707199986@newsletter"
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
adonix: { url: "https://api-adonix.ultraplus.click", key: 'shadow.xyz' },
stellar: { url: "https://api.stellarwa.xyz", key: "this-xyz"},
light: { url: "https://api-gohan.onrender.com", key: null }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

// MODO TRUNKS - PODER DEL FUTURO
global.trunksMode = {
  activado: true,
  nivelPoder: "SOBRE 9000 ⏳",
  energia: "CRONOENERGÍA INFINITA",
  modo: "TRUNKS - VIAJERO DEL TIEMPO",
  espada: "ESPADA DEL FUTURO 🗡️",
  habilidades: [
    "⚡ Corte Dimensional",
    "🌀 Viaje en el Tiempo",
    "🔥 Explosión de Energía Futura",
    "✨ Protección Temporal",
    "💥 Ataque Final Trunks"
  ]
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

// MENSAJES ÉPICOS MODO TRUNKS
global.welcome = {
  activado: true,
  mensaje: `⏳ *¡NUEVO GUERRERO DETECTADO EN LA LÍNEA TEMPORAL!* ⏳\n\n⚡ Nombre: @user\n🗡️ Rango: Aprendiz del Tiempo\n⏳ Poder: En desarrollo\n🌀 Estado: Protegido por Trunks\n\n✨ *¡Bienvenido a la línea temporal!* ✨`
}

global.leave = {
  activado: true,
  mensaje: `⚡ *UN GUERRERO HA CAMBIADO DE LÍNEA TEMPORAL* ⚡\n\n🗡️ Guerrero: @user\n⏳ Destino: Otra dimensión\n🌀 El tiempo siempre lo recordará\n\n✨ *Que el futuro te sea favorable* ✨`
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

// LOG DE INICIO - PODER DEL FUTURO
console.log(chalk.bold.cyan('\n⏳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⏳'))
console.log(chalk.bold.magenta('     ⚡ TRUNKS MD - MODO VIAJERO DEL TIEMPO ⚡     '))
console.log(chalk.bold.yellow('        🗡️ EL PODER DEL FUTURO HA LLEGADO 🗡️        '))
console.log(chalk.bold.cyan('⏳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⏳\n'))

console.log(chalk.green('⏳ Activando cronoenergía...'))
console.log(chalk.yellow(`⚡ Nivel de poder: ${global.trunksMode.nivelPoder}`))
console.log(chalk.magenta(`🗡️ Modo: ${global.trunksMode.modo}`))
console.log(chalk.red(`🔥 Espada: ${global.trunksMode.espada}\n`))

console.log(chalk.blue('📜 Habilidades del futuro desbloqueadas:'))
global.trunksMode.habilidades.forEach((hab, i) => {
  console.log(chalk.white(`   ${i + 1}. ${hab}`))
})

console.log(chalk.bold.green('\n✅ TRUNKS MD LISTO PARA DEFENDER LA LÍNEA TEMPORAL! 🗡️⏳\n'))

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("⚡ Actualizando configuración de Trunks MD..."))
import(`${file}?update=${Date.now()}`)
})

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*