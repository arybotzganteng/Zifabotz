let levelIing = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `
╭═══════════════════════⬣
║╭──❉ {    } ❉──────
║│➸Hai, %name!👋
║│➸💰Tersisa *%limit Limit*
║│➸Role *%role*
║│➸🎚️Level *%level (%exp / %maxexp)*
║│➸🎚️[%xp4levelup]
║│➸%totalexp XP secara Total
║╭──❉ 〔⳹ ❋ཻུ۪۪⸙TANGGAL⳹ ❋ཻུ۪۪〕 ❉──────
║│➸Hari: *%week %weton*
║│➸Tanggal: *%date*
║│➸WaktuIslam:*%dateIslamic*
║│➸Waktu: *%time*
║╭──❉ 〔⳹ ❋ཻུ۪۪⸙TIME⳹ ❋ཻུ۪۪〕 ❉──────
║│➸Uptime: *%uptime (%muptime)*
║│➸Database: %rtotalreg dari %totalreg
║│➸Memory Used : 
║│➸${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
╰─────────❉
%readmore`.trimStart(),
  header: '*║╭──❉ 〔%category〕*',
  body: '║│➸%cmd %islimit %isPremium',
  footer: '*╰───❉*\n',
  after: `
  ⬣━〔𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙰𝚁𝚈〕━⬣
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'cristian', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'nsfw': `NSFW ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
    'sticker': 'Stiker',
    'edukasi': 'Edukasi',
    'news': 'News',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'rpg': 'Epic Rpg',
    'group': 'Grup',
    'anime': 'Anime',
    'premium': 'Premium',
    'internet': 'Internet',
    'image': 'Random Image',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'cristian': 'cristian',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Islam',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'Hentai',
    'bokep': 'Bokep'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'cristian') tags = {
    'cristian': 'Cristian'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
			return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `*${ucapan()}, ${name}*`.trim(),
                        "description": `╭═══════════════════════
║╭──❉ 〔 AryBotz 〕 ❉────── 
║│➸⏲️ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 ${uptime}
║│➸ 🔋𝙱𝙰𝚃𝚃𝙴𝚁𝚈 𝙱𝙾𝚃 ! ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
║│➸ *Wa.me/60147751029*
║│➸ *${conn.blocklist.length}* Terblock
║│➸ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
║│➸ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
╰─────────❉
_____••••••••• 
⬣━〔Powered By Ary〕━⬣
▌│█║▌║▌║║▌║▌║█│▌ `.trim(),
                        "footerText": " 📌 𝗣𝗶𝗻𝗻𝗲𝗱 : *𝙺𝙰𝙻𝙾 𝙰𝙳𝙰 𝙼𝙴𝙽𝚄 𝚈𝙰𝙽𝙶 𝙴𝚁𝚁𝙾𝚁 𝙲𝙷𝙰𝚃 𝙾𝚆𝙽𝙴𝚁 𝙰𝙹𝙰*
WA.ME/60147751029
WA.ME/601155090795",
                        "buttonText": "Click Here",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                    "title":  "𝙳𝙾𝙽𝙰𝚂𝙸",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".donasi"
                                }, {
                                    "title":      "𝙳𝙰𝙵𝚃𝙰𝚁",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".daftar Ary.14"
                                }, {
 "title":      "𝚂𝙴𝚃𝙴𝙻𝙰𝙽 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".setelangrub"
                                }, {
"title":      "𝚂𝚃𝙾𝚁𝙴 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".iklan"
                                }, {
  "title":  "𝙹𝙰𝙳𝙸bot 𝚂𝙴𝙼𝙴𝙽𝚃𝙰𝚁𝙰",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".jadibot"
                                }, {
  "title":  "𝙶𝚁𝙾𝚄𝙿 𝙱𝙾𝚃",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".gcbot"
                                }, {
  "title":  "𝙱𝙸𝙾𝙳𝙰𝚃𝙰 𝙾𝚆𝙽𝙴𝚁 < *𝙴𝚁𝚁𝙾𝚁* >",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".infoowner"
                                }, {
                                    "title": "➵͜͡✪ 𝚂𝙴𝚆𝙰𝙱𝙾𝚃",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".sewa"
                                }],
                                "title": "⟣─────────❲ Tentang Bot dan lainnya ❳──────────⟢"
                            }, {
                                "rows": [{
                                    "title": `➵͜͡✪ 𝚂𝙴𝙼𝚄𝙰 𝙿𝙴𝚁𝙸𝙽𝚃𝙰𝙷`,
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? all",
                                }, { 
                                    "title": "➵͜͡✪ 𝙸𝚂𝙻𝙰𝙼 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? quran"
                                }, {
 "title": "➵͜͡✪ 𝙳𝙾𝙰 𝙷𝙰𝚁𝙸𝙰𝙽",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".doaharian"
                                }, {
                                	"title": "➵͜͡✪ 𝙲𝙷𝚁𝙸𝚂𝚃𝙸𝙰𝙽 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? cristian"
                                }, {
                                    "title": "➵͜͡✪ 𝙴𝙳𝚄𝙺𝙰𝚂𝙸 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? edukasi"
                                }, { 
                                    "title": "➵͜͡✪ 𝙽𝙴𝚆𝚂 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? News"
                                }, { 
                                    "title": "➵͜͡✪ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? game"
                                }, { 
                                    "title": "➵͜͡✪ 𝚁𝙿𝙶 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? rpg"
                                }, { 
                                    "title": "➵͜͡✪ 𝚇𝙿 & 𝙻𝙸𝙼𝙸𝚃 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? xp"
                                }, { 
                                    "title": "➵͜͡✪ 𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? nsfw"
                                }, { 
                                    "title": "➵͜͡✪ 𝙸𝙼𝙰𝙶𝙴 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? image"
                                }, { 
                                    "title": "➵͜͡✪ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? stiker"
                                }, { 
                                    "title": "➵͜͡✪ 𝙰𝙹𝙰𝙸𝙱 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? kerangajaib"
                                }, { 
                                    "title": "➵͜͡✪ 𝚀𝚄𝙾𝚃𝙴𝚂 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? quotes"
                                }, { 
                                    "title": "➵͜͡✪ 𝙰𝙳𝙼𝙸𝙽 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? admin"
                                }, { 
                                    "title": "➵͜͡✪ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? grup"
                                }, { 
                                    "title": "➵͜͡✪ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? premium"
                                }, { 
                                    "title": "➵͜͡✪ 𝙸𝙽𝚃𝙴𝚁𝙽𝙴𝚃 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? internet"
                                }, { 
                                    "title": "➵͜͡✪ 𝙰𝙽𝙾𝙽𝚈𝙼𝙾𝚄𝚂 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? anonymous"
                                }, { 
                                    "title": "➵͜͡✪ 𝙽𝚄𝙻𝙸𝚂 & 𝙻𝙾𝙶𝙾 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? nulis"
                                }, { 
                                    "title": "➵͜͡✪ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? downloader"
                                }, { 
                                    "title": "➵͜͡✪ 𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? tools"
                                }, { 
                                    "title": "➵͜͡✪ 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? fun"
                                }, { 
                                    "title": "➵͜͡✪ 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? database"
                                }, { 
                                    "title": "➵͜͡✪ 𝚅𝙾𝚃𝙴 & 𝙰𝙱𝚂𝙴𝙽 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? vote"
                                }, { 
                                    "title": "➵͜͡✪ 𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? audio"
                                }, { 
                                    "title": "➵͜͡✪ 𝙹𝙰𝙳𝙸𝙱𝙾𝚃 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? jadibot"
                                }, { 
                                    "title": "➵͜͡✪ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? anime"
                                }, { 
                                    "title": "➵͜͡✪ 𝙸𝙽𝙵𝙾",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? info"
                                }, { 
"title": "➵͜͡✪ 𝚁𝙴𝚂𝙿𝙾𝙽 𝙱𝙾𝚃",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".runtime"
                                }, { 
                                    "title": "➵͜͡✪ 𝚃𝙰𝙶𝙼𝙴",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".tagme"
                                }, { 
"title": "➵͜͡✪ 𝚆𝙰𝙸𝙵𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".waifu"
                                }, { 
"title": "➵͜͡✪ 𝙿𝚁𝙾𝙵𝙸𝙻𝙴",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".profile"
                                }, { 
                                    "title": "➵͜͡✪ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".? owner"
                                }],
                                "title": "⟣──────────────❲  All-Menu  ❳──────────────⟢"
                            }, {
                                "rows": [{
                                    "title": "➵͜͡✪ 𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".owner"
                                }, {
                                    "title": "➵͜͡✪ 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝙾𝚃",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "➵͜͡✪ 𝚁𝚄𝙻𝙴𝚂 𝙱𝙾𝚃",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".rules"
                                }, {
                                    "title": "➵͜͡✪ 𝚃𝚀𝚃𝙸 𝙰𝙻𝙻",
                                    "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                    "rowId": ".tqto"
                                }],
                                "title": "⟣──────────────❲ Penutup ❳───────────────⟢"
                            }
                        ], "contextInfo": 
						{ "stanzaId": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remoteJid": "623136505591-1614953337@g.us",
                        "quotedMessage": m.message
						}
                    }
                 }, {}), {waitForAck: true})
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} cristian
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), text.trim(), watermark, '▁ ▂ ▄ ▅ ▆ ▇ █𝒫𝐸𝑀𝐼𝐿𝐼𝒦 𝐵❁𝒯', `${_p}owner`, '🐻𝐓𝐔𝐓𝐎𝐑𝐈𝐀𝐋 𝐌𝐄𝐌𝐁𝐔𝐀𝐓 𝐁𝐎𝐓🐻', `.carabuatbot`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 50
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 50
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "udah malam tidur gih •>•"
  if (time >= 4) {
    res = "Selamat pagi hari •>•"
  }
  if (time > 10) {
    res = "Selamat siang hari •>•"
  }
  if (time >= 15) {
    res = "Selamat sore hari •>•"
  }
  if (time >= 18) {
    res = "Selamat malam hari •>•"
  }
  return res
}
