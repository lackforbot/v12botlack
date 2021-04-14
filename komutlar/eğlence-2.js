const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Lack v12 sürümüyle yeniden sizlerle.")
.setTitle("Lack Eğlence Komutları")
 .setTimestamp()
.setDescription(" **!söv** \n • Etiketlediğiniz kişiye söversiniz.   \n  \n  **!balıktut** \n • Balık tutarsınız.   \n  \n  **!kahve-ısmarla** \n • Etiketlediğiniz kişiye kahve ısmarlarsınız.    \n  \n **!kafasına-sık** \n • Etiketlediğiniz kişiye bir el ateş eder.     \n  \n **!dcdeki-yıkık** \n • Sunucudaki yıkığı gösterir.  \n  \n  **!şekerye** \n • Şeker yersiniz.  \n  \n  **!aduket-çek** \n • Aduket çekersiniz.  \n  \n  **!slots** \n • Slots oyunu oynatır.  \n  \n  **!ara112** \n • 112 yi Arar ve ambulans çağırı.  \n  \n  **!ara155** \n • 155 i Arar ve polis çağırır.  \n  \n  **!tkm** \n • Bot ile taş kağıt makas oynarsınız.")
.setImage("https://cdn.discordapp.com/attachments/753985799359430706/822121714284363776/standard.gif")
.setFooter("ƛ Lack#6086")
message.channel.send(eğlence2)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['eğlence-2'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence2'
}
