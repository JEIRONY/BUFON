const { spawn } = require('child_process') 
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
let { webp2png } = require('../lib/webp2mp4')
let handler = async(m, { conn, command, usedPrefix }) => {
if (!global.support.convert &&
!global.support.magick &&
!global.support.gm) {
if (!m.quoted) throw `*[βππππβ] ππ΄ππΏπΎπ½π³π° π°π» πππΈπ²πΊπ΄π πππ΄ π³π΄ππ΄π΄ π²πΎπ½ππ΄πππΈπ π΄π½ πΈπΌπ°πΆπ΄π½ π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `*[βππππβ] ππ΄ππΏπΎπ½π³π° π°π» πππΈπ²πΊπ΄π πππ΄ π³π΄ππ΄π΄ π²πΎπ½ππ΄πππΈπ π΄π½ πΈπΌπ°πΆπ΄π½ π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2png(media)}
await conn.sendFile(m.chat, out, 'out.png', '*οΌ¬οΌ©οΌ³οΌ΄οΌ―*', m, false, {
thumbnail: Buffer.alloc(0)})
return
}
if (!m.quoted) return conn.reply(m.chat, '*[βππππβ] ππ΄ππΏπΎπ½π³π° π°π» πππΈπ²πΊπ΄π πππ΄ π³π΄ππ΄π΄ π²πΎπ½ππ΄πππΈπ π΄π½ πΈπΌπ°πΆπ΄π½*', m)
let q = { message: {
[m.quoted.mtype]: m.quoted } }
if (/sticker/.test(m.quoted.mtype)) {
let sticker = await conn.downloadM(q)
if (!sticker) throw sticker
let bufs = []
const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
let im = spawn(_spawnprocess, _spawnargs)
im.on('error', e => conn.reply(m.chat, util.format(e), m))
im.stdout.on('data', chunk => bufs.push(chunk))
im.stdin.write(sticker)
im.stdin.end()
im.on('exit', () => {
conn.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, {
quoted: m
})})}}
handler.help = ['toimg (reply)']
handler.tags = ['general']
handler.command = /^toimg$/i
handler.fail = null
module.exports = handler
