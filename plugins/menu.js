const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
} catch (e) {
} finally {
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let menu = `
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
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: '©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡',
hydratedButtons: [{
urlButton: {
displayText: '𝙶𝙸𝚃𝙷𝚄𝙱',
url: 'https://github.com/JEIRONY/BUFON'
}},
{
urlButton: {
displayText: '𝙲𝚁𝙴𝙰𝙳𝙾𝚁',
url: 'https://wa.me/573152139466'    
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}}]}}
}), { userJid: m.sender, quoted: m });
return await conn.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })    
    
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
