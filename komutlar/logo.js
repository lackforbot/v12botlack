const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Lack v12 sürümüyle yeniden sizlerle.")
.setTitle(" Lack Logo Komutları ")
 .setTimestamp()
.setDescription("**!dinamik** \n • Dinamik logo oluşturur.  \n  \n  **!altın** \n • Altın logo oluşturur.  \n  \n  **!banner** \n • Banner logo oluşturur.  \n  \n  **!basit** \n • Basit logo oluşturur.  \n  \n  **!elmas** \n • Elmas logo oluşturur.  \n  \n  **!sarı** \n • Sarı logo oluşturur.  \n  \n  **!neonmavi** \n • Neon mavi logo oluşturur.  \n  \n  **!kalın** \n • Kalın logo oluşturur.  \n  \n  **!anime** \n • Anime yazı tipinde logo oluşturur.  \n  \n  **!habbo** \n • Habbo yazı tipinde logo oluşturur. \n  \n **!arrow** \n • Ok işaretli logo oluşturur. \n  \n **!green** \n • Yeşil logo oluşturur. \n  \n  **!alev** \n • Alevli logo oluşturur. \n  \n  **!red** \n • Kırmızı logo oluşturur.")
.setImage("https://cdn.discordapp.com/attachments/753985799359430706/822121714284363776/standard.gif")
.setFooter('ƛ Lack#6086')
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}