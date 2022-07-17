let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ a
┣ ${usedPrefix}cat
┣ ${usedPrefix}dog
┣ ${usedPrefix}logos
┣ ${usedPrefix}runtime
┣ ${usedPrefix}tiktok *[url]*
┣ ${usedPrefix}sticker *[url]*
┣ ${usedPrefix}attp *[texto]*
┣ ${usedPrefix}google *[texto]*
┣ ${usedPrefix}imagen *[texto]*
┣ ${usedPrefix}play *[texto]*
┣ ${usedPrefix}play2 *[texto]*
┣ ${usedPrefix}ytmp3 *[url]*
┣ ${usedPrefix}ytmp4 *[url]*
┣ ${usedPrefix}tts *[lenguaje] [texto]*
┣ ${usedPrefix}toimg *[sticker]*
┣ ${usedPrefix}sticker *[imagen]*
┣ ${usedPrefix}tourl *[imagen]*
┣ ${usedPrefix}tourl *[video]*
┣ ${usedPrefix}tourl *[audio]*
┣ ${usedPrefix}fat *[nota de voz]*
┣ ${usedPrefix}bass *[nota de voz]*
┣ ${usedPrefix}blown *[nota de voz]*
┣ ${usedPrefix}deep *[nota de voz]*
┣ ${usedPrefix}fast *[nota de voz]*
┣ ${usedPrefix}robot *[nota de voz]*
┣ ${usedPrefix}slow *[nota de voz]*
┣ ${usedPrefix}tupai *[nota de voz]*
┣ ${usedPrefix}vibra *[nota de voz]*
┣ ${usedPrefix}nightcore *[nota de voz]*
┣ ${usedPrefix}earrape *[nota de voz]*
┣ ${usedPrefix}reverse *[nota de voz]*
┣ ${usedPrefix}smooth *[nota de voz]*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ${usedPrefix}update_
┗━━━━━━━━━━━━━┛
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©BUFON', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
