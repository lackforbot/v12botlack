const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor("Lack v12 sürümüyle yeniden sizlerle.")
.setTitle("**Lack'in yardım menüsüne hoşgeldin!**")
 .setTimestamp()
.setDescription("•**Yardım Komutları** \n  \n •**!eğlence**\n • __Eğlence komutlarını görüntülersiniz.__🎈  \n • ___(11 Aktif Komut)___  \n  \n •**!eğlence2**\n • __2. Eğlence komutlarını görüntülersiniz.__🎈  \n • ___(11 Aktif Komut)___ \n  \n •**!moderasyon**  \n • __Moderasyon komutlarını görüntülersiniz.__🔰 \n •___(14 Aktif Komut)___ \n  \n •**!kullanıcı**  \n •__Kullanıcı komutlarını görüntülersiniz.__🤷‍♂️ \n •___(14 Aktif Komut)___ \n \n •**!logo** \n  •__Logo komutlarını görüntülersiniz.__🤳🏻 \n •___(14 Aktif Komut)___ \n  \n •**!çal** \n • __YOUTUBE Linki İle Şarkı açabilirsiniz__🎤")
.setImage("https://cdn.discordapp.com/attachments/753985799359430706/822121714284363776/standard.gif")
.setFooter('ƛ Lack#6086')
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}