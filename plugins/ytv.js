let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate') 
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) return m.reply('*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*')
let chat = global.db.data.chats[m.chat]
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } catch (e) {}
conn.sendFile(m.chat, dl_link, title + '.mp4', `
*π ππΈπππ»πΎ:* ${title}
*π πΏπ΄ππΎ:* ${filesizeF}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['general']
handler.command = /^yt(v|mp4)?$/i
module.exports = handler
