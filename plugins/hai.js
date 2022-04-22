let handler = async (m, { conn }) => {
let caption = ` *📮: HALLO KAK SAYA ARYBOTZ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `© ༄ᶦᵅᵐ 𝐀𝐑𝐈 Design×፝֟͜×࿐`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|bot|ry|arybot|ary|hai|hi|p|ayg|syg|daniel|noel|noeldaniel|hay|menu)/i
handler.command = new RegExp
module.exports = handler
