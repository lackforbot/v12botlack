const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const k = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("Lack v12 sürümüyle sizlerle.")
.setTitle(" Lack Kullanıcı Komutları ")
 .setTimestamp()
.setDescription("**!sil** \n • Yazdığınız miktarda mesajı siler. \n  \n **!ban** \n • Etiketlediğiniz kişiyi banlarsınız. \n  \n  **!kick** \n • Etiketlediğiniz kişiyi atarsınız.  \n  \n  **!duyuru** \n • Bota duyuru yaptırırsınız.  \n  \n **!küfür** \n • Küfür engel sistemini açarsınız. \n  \n **!reklam** \n • Reklam engel sistemi açarsınız. \n  \n **!slowmode** \n • Yavaş modu ayarlarsınız. \n  \n **!forceban** \n • Birisine id ban atarsınız. \n  \n **!unban** \n • Birisinin banını açarsınız. \n  \n  **!sa-as** \n • Bot biri sa dedimi cevap verir.  \n  \n  **!sunucubilgi** \n • Sunucu bilgilerini görürsün. \n  \n **!üyedurum** \n • Üyelerin durumlarını görürsün.  \n  \n  **!çekiliş** \n • Çekiliş başlatırsınız.   \n  \n  **!sikayet** \n • Şikayette bulunursunuz.  \n  \n  **!yılbaşı** \n • Yılbaşına ne kadar kaldığını söyler.")
.setImage("https://cdn.discordapp.com/attachments/753985799359430706/822121714284363776/standard.gif")
.setFooter('ƛ Lack#6086')
message.channel.send(k)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['k'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'kullanıcı Menüsü.',
   usage:'!kullanıcı'
}