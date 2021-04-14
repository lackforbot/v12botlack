const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Lack v12 sürümüyle yeniden sizlerle.")
.setTitle("Lack Eğlence Komutları")
 .setTimestamp()
.setDescription(" **!tersyazı** \n • Bir Yazıyı Bot Ters Yazar.  \n  \n  **!mcskin** \n • Yazdığınız ismin minecraft görünüşünü atar.  \n  \n  **!fbi** \n • Bot FBi Gif Atar. \n  \n  **!token** \n • Tokenimi Öğrenmek İstemezmisin?  \n  \n  **!düello** \n • Düello Atarsın.  \n  \n  **!wasted** \n • Polis tarafından yakalanırsın.  \n  \n  **!atatürk** \n • Dene ve gör... (1881-1938) \n  \n **!sor** \n • Bota soru sorarsınız.  \n  \n **!aşkölç** \n • Etiketlediğiniz kişi ile aşkınızı ölçersiniz. \n  \n  **!kartopu-at** \n • Kartopu atarsın.   \n  \n  **!yak** \n • Sigara yakarsınız.")
.setImage("https://cdn.discordapp.com/attachments/753985799359430706/822121714284363776/standard.gif")
.setFooter("ƛ Lack#6086")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}
//   \n  \n  **!söv** \n • Etiketlediğiniz kişiye söversiniz.   \n  \n  **!balıktut** \n • Balık tutarsınız.   \n  \n  **!kahve-ısmarla** \n • Etiketlediğiniz kişiye kahve ısmarlarsınız.    \n  \n **!kafasına-sık** \n • Etiketlediğiniz kişiye bir el ateş eder.     \n  \n **!dcdeki-yıkık** \n • Sunucudaki yıkığı gösterir.  \n  \n  **!şekerye** \n • Şeker yersiniz.  \n  \n  **!aduket-çek** \n • Aduket çekersiniz.  \n  \n  **!slots** \n • Slots oyunu oynatır.  \n  \n  **!ara112** \n • 112 yi Arar ve ambulans çağırı.  \n  \n  **!ara155** \n • 155 i Arar ve polis çağırır.  \n  \n  **!tkm** \n • Bot ile taş kağıt makas oynarsınız."