let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\n*setelan grub*`,
                        "description": "\n\n*©ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×*",
                        "footerText": "𝙹𝙸𝙺𝙰 𝙰𝙳𝙰 𝙱𝚄𝙶 𝙰𝚃𝙰𝚄 𝙴𝚁𝚁𝙾𝚁 𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙻𝙰𝙿𝙾𝚁 𝙺𝙴 𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃",
                        "buttonText": "*𝕮𝕷𝕴𝕮𝕶 𝕳𝕰𝕽𝕰*",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "➵͜͡✪ 𝙰𝙺𝚃𝙸𝙵𝙺𝙰𝙽 𝚆𝙴𝙻𝙲𝙾𝙼𝙴👋",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "➵͜͡✪ 𝙼𝙰𝚃𝙸𝙺𝙰𝙽 𝚆𝙴𝙻𝙲𝙾𝙼𝙴👋",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".off welcome"
                                        },{
                                    	"title": "➵͜͡✪ 𝙾𝙽 𝙰𝙽𝚃𝙸𝙳𝙴𝙻𝙴𝚃𝙴",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".on delete"
                                        },{
                                        "title": "➵͜͡✪ 𝙾𝙵𝙵 𝙰𝙽𝚃𝙸𝙳𝙴𝙻𝙴𝚃𝙴",
                                        "description:" "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".off delete"
                                        },{
                                        "title": "➵͜͡✪ 𝙰𝙺𝚃𝙸𝙵𝙺𝙰𝙽 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴",
                                        "description:" "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".on viewonce"
                                        },{
                                        "title": "➵͜͡✪ 𝙼𝙰𝚃𝙸𝙺𝙰𝙽 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".off viewonce"             
                                        },{
                                        "title": "➵͜͡✪ 𝙰𝙺𝚃𝙸𝙵𝙺𝙰𝙽 𝙳𝙴𝚃𝙴𝙲𝙺",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".on detect"
                                        },{
                                     .   "title": "➵͜͡✪ 𝙼𝙰𝚃𝙸𝙺𝙰𝙽 𝙳𝙴𝚃𝙴𝙲𝙺",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".off detect"
                                        },{
                                    	"title": "ANTIBADWORD",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".on antibadword"
                                        },{
                                    	"title": "➵͜͡✪ 𝙼𝙰𝚃𝙸𝙺𝙰𝙽 𝙰𝙽𝚃𝙸𝙱𝙰𝙳𝚆𝙾𝚁𝙳",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".off antibadword"
                                        },{
                                    	"title": "➵͜͡✪ 𝙰𝙺𝚃𝙸𝙵𝙺𝙰𝙽 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "➵͜͡✪ 𝙼𝙰𝚃𝙸𝙺𝙰𝙽 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺",
                                        "description": "➵͜͡✪ ᴹᴿ𝙄𝙩𝙨𝐀𝐑𝐘 ×፝֟͜×",
                                        "rowId": ".off antilink"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['grubsettings']
handler.tags = ['group']
handler.command = /^(setelangrub|grubsett|settingsgrub|grubsettings|settgrub|groupsett)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
