/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

//Module 
require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');
let hx = require('hxz-api')
let { aiovideodl, savefrom, tiktokdl } = require('@bochilteam/scraper')

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')
const { yt, yta, ytv } = require('../lib/ytdl')

//database
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
if (global.db) global.db = {
chats: {},
...(global.db || {})
}
autobio = true
//Module Exports
module.exports = ichi = async(ichi, m, chatUpdate, store) => {
try {
  //console.log(m)
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = ichi.user.id ? ichi.user.id.split(":")[0]+"@s.whatsapp.net" : ichi.user.id
const isOwner = [ichi.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == ichi.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)


const reply = (texto) => {
			ichi.sendMessage(from, { text: texto, mentions: [m.sender] }, {	quoted: m })
		}

try {
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
} else global.db.chats[m.chat] = {
antilink: false
}
} catch (err) {
console.error(err)
}

if (autobio){
  const timestamp = speed();
  const latensi = speed() - timestamp
  if (autobio === false) return
  let settingstatus = 0;
  if (new Date() * 1 - settingstatus > 1000) {
  ichi.setStatus(`Runtime YaSya - Bot: ${runtime(process.uptime())} | Ping: ${latensi.toFixed(4)} Second`)
  settingstatus = new Date() * 1;
  }}

// Antilink
if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return //  buat ngediem in daripada nyepam m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await ichi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(from, [m.sender], 'remove')
}
}


		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`
     reply(teks)
			await sleep(500)
			m.copyNForward(from, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
		}

//Update Database
setInterval(() => {
fs.writeFileSync('./storage/db.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

if (!ichi.public) {
if (!m.key.fromMe && !isOwner) return
}

//Push Message To Console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ICHI \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

switch(command) {

case 'menu': case 'help': case '?': {
  let menu = `╔════════
╠══ *DOWNLOAD MENU*
╠ ${prefix}play
╠ ${prefix}tiktok
╠ ${prefix}ig
╠ ${prefix}igstory
╠ ${prefix}fb
╠ ${prefix}twitter
╠ ${prefix}mediafire
╠ ${prefix}yts
╠ ${prefix}ytmp3
╠ ${prefix}ytmp4
╚════════

╔════════
╠═ *INFORMATION MENU*
╠ ${prefix}gempa
╠ ${prefix}gempaterbaru
╠ ${prefix}covid
╠ ${prefix}cuaca
╠ ${prefix}jadwalsholat
╚════════

╔════════
╠═ *STALKER MENU*
╠ ${prefix}igstalk
╠ ${prefix}tiktokstalk
╠ ${prefix}githubstalk
╚════════

╔════════
╠══ *OWNER MENU*
╠ ${prefix}bc
╠ ${prefix}bcgc
╠ ${prefix}join
╠ ${prefix}leave
╠ ${prefix}block
╠ ${prefix}unblock
╠ ${prefix}setppbot
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}ip
╠ ${prefix}cekresi
╠ ${prefix}spamtlp
╠ ${prefix}spamall
╠ ${prefix}eval
╚════════
  
╔════════
╠══ *GROUP MENU*
╠ ${prefix}antilink
╠ ${prefix}linkgroup
╠ ${prefix}revoke
╠ ${prefix}kick
╠ ${prefix}add
╠ ${prefix}promote
╠ ${prefix}demote
╠ ${prefix}setname
╠ ${prefix}setdesk
╠ ${prefix}setppgrup
╠ ${prefix}tagall
╠ ${prefix}hidetag
╠ ${prefix}ephemeral
╚════════
  
╔════════
╠══ *MAKER MENU*
╠ ${prefix}sticker
╠ ${prefix}toimg
╠ ${prefix}tovideo
╠ ${prefix}toaudio
╠ ${prefix}tomp3
╠ ${prefix}tovn
╠ ${prefix}togif
╠ ${prefix}tourl
╠ ${prefix}removebg
╠ ${prefix}estetik
╠ ${prefix}ktpmaker
╚════════

╔════════
╠══ *RANDOM MENU*
╠ ${prefix}pinterest
╠ ${prefix}wallpaper
╠ ${prefix}quotesanime
╠ ${prefix}wikimedia
╚════════

╔════════
╠══ *OTHER MENU*
╠ ${prefix}donasi
╠ ${prefix}sewa
╠ ${prefix}sc
╠ ${prefix}owner
╠ ${prefix}ping
╠ ${prefix}menu / ${prefix}help / ${prefix}?
╚════════
  `
  let but = [
  {urlButton: {displayText: 'My Instagram',url: 'https://www.instagram.com/alvianto.17/?hl=id'}}, 
  {"quickReplyButton": {"displayText": "Donate 🗂️","id": `donasi`},},
  {"quickReplyButton": {"displayText": "Owner 👦","id": "owner"},},
  {"quickReplyButton": {"displayText": "Bot Status ⌚","id": `ping`}}
  ]
  ichi.sendButtonImg(from, menu, global.ownerName, global.thumb, but)
  }
  break
  case 'donasi':
    case 'donate':
    donate = `*DONASI KAK BUAT BELI SERVER BOT AGAR BISA AKTIF 24 JAM*\n
*GOPAY*
0895401223315\n
*DANA*
0895401223315\n
*SHOPEEPAY*
0895401223315\n
*OVO*
0895401223315\n
*PAYPAL*
https://paypal.me/alvianto17\n
*SAWERIA*
https://saweria.co/alvianto17`
                qris = fs.readFileSync(`./media/qr.jpg`)
                ichi.sendMessage(from, {caption: donate, image: qris}, { quoted: mek})
                break
case 'sc': case 'sourcecode': case 'script': {
  m.reply('*Script Berasal Dari :* https://github.com/nzrlafndi/ichigo-kurosaki\n\nJangan Lupa Bintang nya!')
  }
  break
case 'owner': {
  ichi.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Ping: *${latensi.toFixed(4)} Second*\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}`.trim()
  m.reply(respon)
  }
  break

//Owner Menu
case 'bcgc': case 'bcgroup': case 'broadcastgroup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  let getGroups = await ichi.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${ichi.user.name}*\n\n${text}\n`
  ichi.sendButtonText(i, txt, m)
  }
  m.reply('Sukses Broadcast')
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  let txt = `*Broadcast YaSya Bot*\n\n${text}`
  ichi.sendText(yoi, txt, m)
  }
  m.reply('Sukses Broadcast')
  }
  break
case 'join': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
  m.reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await ichi.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'leave': {
  if (!isOwner) return m.reply(mess.botOwner)
  await ichi.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  await ichi.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.done)
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.public = true
  m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.self = false
  m.reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

//Group Menu
case 'antilink':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antilink = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antilink = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  break
case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await ichi.groupInviteCode(m.chat)
  ichi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await ichi.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw 'Text ?'
  await ichi.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw 'Text ?'
  await ichi.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  await ichi.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.done)
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  ichi.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  ichi.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukkan value enable/disable')
  if (args[0] === 'enable') {
  await ichi.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await ichi.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await ichi.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await ichi.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(from, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await ichi.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await ichi.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(from, buttons, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break

//Maker Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': case 'sg': {
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ichi.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ichi.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  }
  break


//removebg
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	let remobg = require('remove.bg')
	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	hmm = await './src/remobg-' + getRandom('')
	localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
	console.log(localFile)
	outputFile = await './src/hremo-' + getRandom('.png')
	m.reply(mess.wait)
	try {
		remobg.removeBackgroundFromImageFile({
			path: localFile,
			apiKey: apinobg,
			size: "regular",
			type: "auto",
			scale: "100%",
			outputFile
		}).then(async (result) => {
			//    console.log(result)
			console.log(`File saved to ${outputFile}`);
			await ichi.sendMessage(from, {
				image: fs.readFileSync(outputFile),
				caption: "success"
			}, {
				quoted: m
			})
			const base64img = result.base64img;
			await fs.unlinkSync(localFile)
			await fs.unlinkSync(outputFile)
		}).catch((errors) => {
			console.log(JSON.stringify(errors));
		});
	} catch (err) {
		m.reply(util.format(err))
		await fs.unlinkSync(localFile)
	}
}
break

		            case 'estetik': {
		            	if (!quoted) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	if (!/image/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	if (/webp/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	let remobg = require('remove.bg')
		            	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
		            	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]

		            	hmm = await './src/remobg-' + getRandom('')
		            	localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
		            	outputFile = './src/hremo-' + getRandom('.png')
		            	m.reply(mess.wait)
		            	try {
		            		remobg.removeBackgroundFromImageFile({
		            			path: localFile,
		            			apiKey: apinobg,
		            			size: "regular",
		            			type: "auto",
		            			scale: "100%",
		            			outputFile
		            		}).then(async result => {
		            			console.log(outputFile)
		            			let tes = await fs.readFileSync(outputFile)
		            			let anu = await TelegraPh(outputFile)
		            			console.log(anu)
		            			let hsil = await getBuffer(`https://oni-chan.my.id/api/Fmake/estetik?picturl=${anu}`)
		            			await sleep(9000)
		            			await ichi.sendMessage(from, {
		            				image: hsil,
		            				caption: "success"
		            			}, {
		            				quoted: m
		            			})
		            			await fs.unlinkSync(localFile)
		            			await fs.unlinkSync(outputFile)
		            		})
		            	} catch (err) {
		            		m.reply(util.format(err))
		            		await fs.unlinkSync(localFile)
		            	}
		            }
		            break

		case 'ktpmaker': {
			if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
			get_args = args.join(" ").split("|")
			nik = get_args[0]
			if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
			prov = get_args[1]
			if (!prov) return m.reply('probinsi mana kak')
			kabu = get_args[2]
			if (!kabu) return m.reply('kabupaten mana kak')
			name = get_args[3]
			if (!name) return m.reply('nama nya siapa kak')
			ttl = get_args[4]
			if (!ttl) return m.reply('tempat tanggal lahir nya kak')
			jk = get_args[5]
			if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
			jl = get_args[6]
			if (!jl) return m.reply('alamat rumah nya mana kak')
			rtrw = get_args[7]
			if (!rtrw) return m.reply('RT / RW berapa kak')
			lurah = get_args[8]
			if (!lurah) return m.reply('kelurahan mana kak')
			camat = get_args[9]
			if (!camat) return m.reply('kecamatan mana kak')
			agama = get_args[10]
			if (!agama) return m.reply('agama nya apa kak')
			nikah = get_args[11]
			if (!nikah) return m.reply('status belum ada')
			kerja = get_args[12]
			if (!kerja) return m.reply('pekerjaan belum ada')
			warga = get_args[13]
			if (!warga) return m.reply('region belum ada')
			until = get_args[14]
			if (!until) return m.reply('waktu berlaku belum ada')
			gd = get_args[15]
			if (!gd) return m.reply('golongan darah belum ada')
			img = get_args[16]
			if (!img) return m.reply('url image belum ada')
      m.reply(mess.wait)
			bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
			console.log(bikin)
			ardaktp = await getBuffer(bikin)
		  await sleep(8000)
			await ichi.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
		//	await sleep(5000)
		}
			break;

case 'toimage': case 'toimg': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  ichi.sendMessage(from, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ichi.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  ichi.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  }
  break
case 'togif': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break

//Random Menu
case 'pinterest': {
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(from, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(from, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  }
  break
case 'quotesanime': {
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendButtonText(from, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  }
  break
case 'wikimedia': {
  if (!text) throw 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(from, buttonMessage, { quoted: m })
  }
  break

//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/ytdl')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text)
  if (media.filesize >= 102400) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `---- Youtube Downloader -----
  
Judul : ${media.title}
Resolusi : ${args[1] || '360p'}
Format : MP4
Url : ${isUrl(text)}`
  ichi.sendMessage(from, { video: { url: `${media.dl_link}` }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('../lib/ytdl')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text)
  if (media.filesize >= 102400) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var caption = `*------ Youtube Downloader -----*

Title : ${media.title}
Resolusi : ${args[1] || '128kbps'}
Format : MP3
Url : ${isUrl(text)}`
  ichi.sendImage(from, media.thumb, caption, m)
  ichi.sendMessage(from, { document: { url: `${media.dl_link}` }, mimetype: 'audio/mp3', fileName: `${media.title}.mp3` }, { quoted: m })
  }
  break
case 'yts': case 'ytsearch': {
  if (args.length == 0) return reply(`*Contoh:* .yts Waiting for love`)
  m.reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  ichi.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
  }
  break
case 'play':
  if (args.length == 0) return reply(`*Contoh:* .play Waiting for love`)
  let yts = require("yt-search")
  let yut = await yts(text)
  yta(yut.videos[0].url)             
            .then(async(res) => {
            var { thumb, title, filesizeF, filesize } = res
  let buttons = [{buttonId: `ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: thumb },
  caption: `*----- DATA DITEMUKAN -----*
  
*Title :* ${yut.all[0].title}
*Duration :* ${yut.all[0].timestamp}
*Viewers :* ${yut.all[0].views}
*Upload :* ${yut.all[0].ago}
*Channel :* ${yut.all[0].author.name}
*Url :* ${yut.videos[0].url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(from, buttonMessage, { quoted: m })})
  break
  case 'instagram':
    case 'ig':
    if (args.length == 0) return reply(`*Contoh:* .instagram https://www.instagram.com/p/CYIjdyPvkpe/?igshid=YmMyMTA2M2Y= `)
    if (!q.includes('instagram')) return m.reply('Link Invalid')
    m.reply(mess.wait)
    hx.igdl(text)
    .then(result => {
     for (let i of result.medias) {
      if (i.url.includes("mp4")) {
        ichi.sendMessage(from,{ video: { url: `${i.url}` }, mimetype: 'video/mp4',quoted: m})
      } else {
        ichi.sendMessage(from, {image: { url: `${i.url}` }}, {quoted: m });
        }
        }
        })
        break
    case 'instagramstory':
      case 'igstory':
        if (args.length == 0) return reply(`*Contoh:* .instagramstory alvianto.17`)
        anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/igstory?username=${text}&apikey=sanuwa`)
        for (let i of anu.result) {
          if (i.fileType.includes("mp4")) {
            ichi.sendMessage(from,{ video: { url: `${i.url}` }, mimetype: 'video/mp4',quoted: m})
          } else {
            ichi.sendMessage(from, {image: { url: `${i.url}` }}, {quoted: m });
            }}
            break
            
  case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok': case 't': case 'tt':
    if (!q.includes('tiktok')) return m.reply('Link Invalid')
    m.reply(mess.wait)
    tiktokdl(text)
            .then(result => {
              ichi.sendMessage(from,{ video: { url: `${result.video.no_watermark}` }, mimetype: 'video/mp4',quoted: m})
                  })
                  break
                  case 'twit':
            case 'twitter':
                        if (args.length == 0) return reply(`*Contoh:* .twitter https://twitter.com/dekai23/status/1488600754256551941`)
                        if (!q.includes('twitter')) return m.reply('Link Invalid')
                        m.reply(mess.wait)
                        hx.twitter(link)
                        .then(result => {
                        console.log(result)
                        reply(mess.wait)
                        ichi.sendMessage(from,{ video: { url: `${result.HD}` }, mimetype: 'video/mp4',quoted: m})
                        })
                        break
            case 'fb':
            case 'facebook':
                        if (args.length == 0) return reply(`*Contoh:* .fb https://www.facebook.com/groups/526925218448628/permalink/591475845326898/`)
                        m.reply(mess.wait)
                        anu = await savefrom(text)
                        reply(mess.wait)
                        ichi.sendMessage(from,{ video: { url: `${anu.url[0].url}` }, mimetype: 'video/mp4',quoted: m})
                        break
            case 'mediafire':
              if (args.length == 0) return reply(`*Contoh:* .mediafire https://www.mediafire.com/file/t2hxyuz7vbwima1/example.txt/file`)
              anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/mediafire?url=${text}&apikey=sanuwa`)
              anu = anu.result
              reply(mess.wait)
                if (anu[0].mime.includes("mp4")) {
                  ichi.sendMessage(from,{ video: { url: `${anu[0].link}` }, mimetype: 'video/mp4',quoted: m})
                } else if (anu[0].mime.includes("jpg")) {
                  ichi.sendMessage(from, {image: { url: `${anu[0].link}` }}, {quoted: m })
                } else if (anu[0].mime.includes("png")) {
                  ichi.sendMessage(from, {image: { url: `${anu[0].link}` }}, {quoted: m })
                } else if (anu[0].mime.includes("mp3")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                } else if (anu[0].mime.includes("m4a")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                } else if (anu[0].mime.includes("txt")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                } else if (anu[0].mime.includes("zip")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                } else if (anu[0].mime.includes("rar")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                } else if (anu[0].mime.includes("7z")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                } else if (anu[0].mime.includes("apk")) {
                  ichi.sendMessage(from, {document: { url: `${anu[0].link}` }, fileName: `${anu[0].nama}` }, {quoted: m })
                }
                break
                  





//INFORMASI
                  case 'gempa':
                    bmkg1 = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
                    bmkg1 = bmkg1.Infogempa
                    bmkg = bmkg1.gempa
                    bmk = `https://ews.bmkg.go.id/TEWS/data/${bmkg.Shakemap}`
                    ini_txt = `Tanggal : ${bmkg.Tanggal}\n`
                    ini_txt += `Jam : ${bmkg.Jam}\n`
                    ini_txt += `Magnitudo : ${bmkg.Magnitude}\n`
                    ini_txt += `Kedalaman : ${bmkg.Kedalaman}\n`
                    ini_txt += `Koordinat : ${bmkg.Coordinates}\n`
                    ini_txt += `Lintang : ${bmkg.Lintang}\n`
                    ini_txt += `Bujur : ${bmkg.Bujur}\n`
                    ini_txt += `Lokasi Gempa : ${bmkg.Wilayah}\n`
                    ini_txt += `Dirasakan : ${bmkg.Dirasakan}\n\n`
                    ini_txt += `Data ini diambil dari *https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg*`
                    anu = await getBuffer(bmk)
                    ichi.sendMessage(from, {image: anu, caption: ini_txt}, {quoted: m })
                    break
                    case 'gempaterbaru':
                    anu = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`)
                    anu = anu.Infogempa
                    anu1 = anu.gempa
                    ini_txt = ""
                    ini_txt +=`*MENAMPILKAN 15 DATA GEMPA TERBARU*\n\n`
                    ini_txt +=`Data ini diambil dari *https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg*\n\n`
              for (var x of anu1) {
                    ini_txt += `Tanggal : ${x.Tanggal}\n`
                    ini_txt += `Jam : ${x.Jam}\n`
                    ini_txt += `Magnitudo : ${x.Magnitude}\n`
                    ini_txt += `Kedalaman : ${x.Kedalaman}\n`
                    ini_txt += `Koordinat : ${x.Coordinates}\n`
                    ini_txt += `Lintang : ${x.Lintang}\n`
                    ini_txt += `Bujur : ${x.Bujur}\n`
                    ini_txt += `Lokasi Gempa : ${x.Wilayah}\n`
                    ini_txt += `Potensi : ${x.Potensi}\n\n`}
              m.reply(ini_txt)
              break
                    case 'corona':
                    case 'covid':
                    get_result = await fetchJson(`https://restu-restapi.herokuapp.com/covid?country=indonesia`)
                    get_result = get_result.result
                    ini_txt = `Laporan COVID Update pada : *${get_result.diperbarui}*\n\n`
                    ini_txt += `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}\n\n`
                    ini_txt += 'Data ini diambil dari *https://covid19.go.id/peta-sebaran*'
                    reply( ini_txt )
                    break
                    case 'cuaca':
                    if (args.length == 0) return reply(`*Contoh:* .cuaca Yogyakarta`)
                    kota = args.join(" ")
                    anu = await fetchJson(`https://api.xteam.xyz/cuaca?kota=${kota}&APIKEY=a781ec5cc8d2e966`)
                    anu = anu.message
                    txt = `*Kota* : ${anu.kota}\n`
                    txt += `*Hari* : ${anu.hari}\n`
                    txt += `*Cuaca* : ${anu.cuaca}\n`
                    txt += `*Deskripsi* : ${anu.deskripsi}\n`
                    txt += `*Suhu* : ${anu.suhu}\n`
                    txt += `*Kelembapan* : ${anu.kelembapan}\n`
                    txt += `*Angin* : ${anu.angin}\n`
                    txt += `*Pressure* : ${anu.pressure}`
                    m.reply( txt )
                    break
                    case 'jadwalsholat':
                    if (args.length == 0) return reply(`*Contoh:* .jadwalsholat Yogyakarta`)
                    cari = args[0]
                    cariid = await fetchJson(`https://api.myquran.com/v1/sholat/kota/cari/${cari}`)
                    cariid = cariid.data[0]
                    ketemuid = await fetchJson(`https://api.myquran.com/v1/sholat/jadwal/${cariid.id}/${moment().tz('Asia/Jakarta').format('YYYY/MM/D')}`)
                    ketemuid = ketemuid.data
                    ketemuid1 = ketemuid.jadwal
                    txt = `Tanngal: *${ketemuid1.tanggal}*\n`
                    txt += `Kota/Kab: ${ketemuid.lokasi}\n`
                    txt += `Provinsi: ${ketemuid.daerah}\n\n`
                    txt += `Imsak: *${ketemuid1.imsak}*\n`
                    txt += `Subuh: *${ketemuid1.subuh}*\n`
                    txt += `Dhuha: *${ketemuid1.dhuha}*\n`
                    txt += `Dzuhur: *${ketemuid1.dzuhur}*\n`
                    txt += `Ashar: *${ketemuid1.ashar}*\n`
                    txt += `Maghrib: *${ketemuid1.maghrib}*\n`
                    txt += `Isya: *${ketemuid1.isya}*\n\n\n`
                    txt += `Data ini diambil dari: *http://jadwalsholat.pkpu.or.id*\n\n`
                    txt += `*List daerah/kota :*
        Ambarawa, Ambon, Amlapura, Amuntai, Argamakmur, ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Atambua, Babo, Bagan Siapiapi, Bajawa, Balige, Balik Papan, Banda Aceh, Bandarlampung, Bandung, Bangkalan, Bangkinang, Bangko, Bangli, Banjar, Banjar Baru, Banjarmasin, Banjarnegara, Bantaeng, Banten, Bantul, Banyuwangi, Barabai, Barito, Barru, Batam, Batang, Batu, Baturaja, Batusangkar, Baubau, Bekasi, Bengkalis, Bengkulu, Benteng, Biak, Bima, Binjai, Bireuen, Bitung, Blitar, Blora, Bogor, Bojonegoro, Bondowoso, Bontang, Boyolali, Brebes, Bukit Tinggi, Bulukumba, Buntok, Cepu, Ciamis, Cianjur, Cibinong, Cilacap, Cilegon, Cimahi, Cirebon, Curup, Demak, Denpasar, Depok, Dili, Dompu, Donggala, Dumai, Ende, Enggano, Enrekang, Fakfak, Garut, Gianyar, Gombong, Gorontalo, Gresik, Gunung Sitoli, Indramayu, Jakarta, Jambi, Jayapura, Jember, Jeneponto, Jepara, Jombang, Kabanjahe, Kalabahi, Kalianda, Kandangan, Karanganyar, Karawang, Kasungan, Kayuagung, Kebumen, Kediri, Kefamenanu, Kendal, Kendari, Kertosono, Ketapang, Kisaran, Klaten, Kolaka, Kota Baru Pulau Laut, Kota Bumi, Kota Jantho, Kota Mobagu, Kuala Kapuas, Kuala Kurun, Kuala Pembuang, Kuala Tungkal, Kudus, Kuningan, Kupang, Kutacane, Kutoarjo, Labuhan, Lahat, Lamongan, Langsa, Larantuka, Lawang, Lhoseumawe, Limboto, Lubuk Basung, Lubuk Linggau, Lubuk Pakam, Lubuk Sikaping, Lumajang, Luwuk, Madiun, Magelang, Magetan, Majalengka, Majene, Makale, Makassar, Malang, Mamuju, Manna, Manokwari, Marabahan, Maros, Martapura, Masohi, Mataram, Maumere, Medan, Mempawah, Menado, Mentok, Merauke, Metro, Meulaboh, Mojokerto, Muara Bulian, Muara Bungo, Muara Enim, Muara Teweh, Muaro Sijunjung, Muntilan, Nabire, Negara, Nganjuk, Ngawi, Nunukan, Pacitan, Padang, Padang Panjang, Padang Sidempuan, Pagaralam, Painan, Palangkaraya, Palembang, Palopo, Palu, Pamekasan, Pandeglang, Pangkajene, Pangkajene Sidenreng, Pangkalanbun, Pangkalpinang, Panyabungan, Pare, Parepare, Pariaman, Pasuruan, Pati, Payakumbuh, Pekalongan, Pekan Baru, Pemalang, Pematangsiantar, Pendopo, Pinrang, Pleihari, Polewali, Pondok Gede, Ponorogo, Pontianak, Poso, Prabumulih, Praya, Probolinggo, Purbalingga, Purukcahu, Purwakarta, Purwodadigrobogan, Purwokerto, Purworejo, Putussibau, Raha, Rangkasbitung, Rantau, Rantauprapat, Rantepao, Rembang, Rengat, Ruteng, Sabang, Salatiga, Samarinda, Sampang, Sampit, Sanggau, Sawahlunto, Sekayu, Selong, Semarang, Sengkang, Serang, Serui, Sibolga, Sidikalang, Sidoarjo, Sigli, Singaparna, Singaraja, Singkawang, Sinjai, Sintang, Situbondo, Slawi, Sleman, Soasiu, Soe, Solo, Solok, Soreang, Sorong, Sragen, Stabat, Subang, Sukabumi, Sukoharjo, Sumbawa Besar, Sumedang, Sumenep, Sungai Liat, Sungai Penuh, Sungguminasa, Surabaya, Surakarta, Tabanan, Tahuna, Takalar, Takengon, Tamiang Layang, Tanah Grogot, Tangerang, Tanjung Balai, Tanjung Enim, Tanjung Pandan, Tanjung Pinang, Tanjung Redep, Tanjung Selor, Tapak Tuan, Tarakan, Tarutung, Tasikmalaya, Tebing Tinggi, Tegal, Temanggung, Tembilahan, Tenggarong, Ternate, Tolitoli, Tondano, Trenggalek, Tual, Tuban, Tulung Agung, Ujung Berung, Ungaran, Waikabubak, Waingapu, Wamena, Watampone, Watansoppeng, Wates, Wonogiri, Wonosari, Wonosobo, Yogyakarta`
                    m.reply( txt )
                    break
                    case 'ip':
                      if (!isOwner) return m.reply(mess.botOwner)
                       if (args.length == 0) return reply(`*Contoh:* .ip 1.1.1.1`)
                       ip = args.join(" ")
                       anu = await fetchJson(`http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`)
                       ini_txt = `Ip : ${ip}\n`
                       ini_txt += `Isp : ${anu.isp}\n`
                       ini_txt += `City : ${anu.city}\n`
                       ini_txt += `Region : ${anu.regionName}\n`
                       ini_txt += `ZipCode : ${anu.zip}\n`
                       ini_txt += `Country : ${anu.country}\n`
                       ini_txt += `TimeZone : ${anu.timezone}\n`
                       ini_txt += `Lat : ${anu.lat}\n`
                       ini_txt += `Lon : ${anu.lon}\n`
                       ini_txt += `ASN : ${anu.as}\n`
                       ini_txt += `AsName : ${anu.asname}\n`
                       ini_txt += `Org : ${anu.org}`
                       m.reply( ini_txt )
                       break
                       case 'spamtlp':
                        if (!isOwner) return m.reply(mess.botOwner)
                        if (args.length == 0) return reply(`*Contoh:* .spamtlp 89xxx`)
                        nomer = args.join(" ")
                        anu = await fetchJson(`https://caliphapi.com/api/spamcall?no=${nomer}&apikey=DmmL8IQZ`)
                        m.reply(anu.result)
                        break
                        case 'spamall':
                          if (!isOwner) return m.reply(mess.botOwner)
                     if (args.length == 0) return reply(`*Contoh:* .spamall 62xxxxxxxxxxx`)
                     nomer = args.join(" ")
                     spam = await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam1 = await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam2 = await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam3 = await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam4 = await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam5 = await fetchJson(`https://api.xteam.xyz/spammer//icq?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     m.reply(`Sukses Spam Nomer wa.me/${nomer}`)
                     break
                     case 'cekresi':
                      if (!isOwner) return m.reply(mess.botOwner)
            txt1 = args[0]
            txt2 = args[1]
      anu = await fetchJson(`https://api.binderbyte.com/v1/track?api_key=f5eda35eb6a58e3c2b59cefbb1dba5af722f360a9977d953a1fdc170e1c94147&courier=${txt1}&awb=${txt2}`)
      anu1 = anu.data
      anu2 = anu1.summary
      anu3 = anu1.detail
      anu4 = anu1.history
      txt = `No Resi: ${txt2}\n`
      txt += `Kurir: ${anu2.courier}\n`
      txt += `Service: ${anu2.service}\n`
      txt += `Pengirim: ${anu3.shipper}\n`
      txt += `Penerima: ${anu3.receiver}\n`
      txt += `Status: ${anu2.status}\n`
      txt += `Dikirim Tanggal: ${anu2.date}\n`
      txt += `Jumlah: ${anu2.amount}\n`
      txt += `Berat: ${anu2.weight}`
      m.reply(txt)
      setTimeout( () => {
      tlhsmp = ""
      for (var x of anu4) {
            tlhsmp += `${x.date}      _${x.desc}_\n\n`
      }
      m.reply(tlhsmp)},1000)
      break

      case 'igstalk':
            if (args.length == 0) return reply(`*Contoh:* .igstalk alvianto.17`)
            username = args.join(" ")
            anu = await fetchJson(`https://api-aquabot.herokuapp.com/other/igstalk?username=${username}&apikey=aquabot`)
            anu = anu.result
            txt = `Username: ${anu.Username}\n`
            txt += `Fullname: ${anu.Fullname}\n`
            txt += `Bio: ${anu.Biography}\n`
            txt += `Followers: ${anu.Followers}\n`
            txt += `Following: ${anu.Following}\n`
            txt += `Verified Account? Ngimpi awokawokawok\n\n`
            txt += `Link: https://www.instagram.com/${username}/?hl=id`
            anu1 = await getBuffer(anu.Profile_Pic)
            ichi.sendMessage(from, {image: anu1, caption: txt}, {quoted: m })
            break
      case 'tiktokstalk':
      if (args.length == 0) return reply(`*Contoh:* .tiktokstalk alvianto17`)
      username = args.join(" ")
      anu = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=7813b18afdafac9d3df5d65a`)
      anu = anu.result
      txt = `Username: ${anu.username}\n`
      txt += `Nickname: ${anu.nickname}\n`
      txt += `Bio: ${anu.bio}\n`
      txt += `Like: ${anu.likes}\n`
      txt += `Video: ${anu.video}\n`
      txt += `Followers: ${anu.followers}\n`
      txt += `Following: ${anu.followings}`
      anu1 = await getBuffer(anu.user_picture)
      ichi.sendMessage(from, {image: anu1, caption: txt}, {quoted: m })
      break
      case 'githubstalk':
      if (args.length == 0) return reply(`*Contoh:* .githubstalk alvianto17`)
      username = args.join(" ")
      anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/other/ghstalk?username=${username}&apikey=sanuwa`)
      anu = anu.result
      txt = `Username: ${anu.username}\n`
      txt += `Name: ${anu.name}\n`
      txt += `Bio: ${anu.bio}\n`
      txt += `Blog: ${anu.blog}\n`
      txt += `Repository: ${anu.publicRepos}\n`
      txt += `Followers: ${anu.followers}\n`
      txt += `Following: ${anu.following}\n`
      txt += `Account Created: ${anu.createdAt}\n`
      txt += `Account Update: ${anu.updatedAt}\n\n`
      txt += `Link: https://github.com/${username}`
      m.reply( txt )
      break
//Eval
default:
            if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`assalamualaikum`)) {
                        reply(`Waalaikumsalam`)
                        }
                        if (budy == `Bot`) {
                              reply(`Apa? mau pakai bot? caranya kirim .help`)
                              }
                              if (budy == `bot`) {
                                    reply(`Apa? mau pakai bot? caranya kirim .help`)
                                    }
                                    if (budy == `P`) {
                                          reply(`Kesopanan minus( - )\n\n.help untuk melihat semua command/fitur`)
                                          }
                                          if (budy == `p`) {
                                                reply(`Kesopanan minus( - )\n\n.help untuk melihat semua command/fitur`)
                                                }
                                                if (budy.includes(`Tasya`)) {
                                                  reply(`Apa tasya tasya? itu ayang bot, jangan diambil:(`)
                                                  }
                                                   if (budy.includes(`tasya`)) {
                                                       reply(`Apa tasya tasya? itu ayang bot, jangan diambil:(`)
                                                       }
                                            if (budy.includes(`Asu`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`asu`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`asw`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }      
                                            if (budy.includes(`Jancok`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`jancok`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`jnck`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`Kontol`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`kontol`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`kntl`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`Memek`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`memek`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`mmk`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }
                                            if (budy.includes(`Ngontol`)) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.mp3`)
                                                  ichi.sendMessage(from, { audio: buffer2, ptt: true}, { mimetype: 'audio/mp3'}, {quoted: m })
                                                  },7000)
                                                  }

if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
  } catch (err) {
    console.log("error di bagian ichi.js "+util.format(err))
//  m.reply(util.format(err))
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
