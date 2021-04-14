const discord = require("discord.js")

exports.run = function(client, message, args){

var box = [
"XXXTENTACION - HOPE",
"3Blllvck - Sad Days",
"Billie Elish - Lovely",
"Alexander Rybak - Fairy Tale",
"Lil Nas X - Old Town Road",
"Tuğce Kandemir - Sen Ayrı Trende Ben Ayrı Garda ",
"Uzi - Makina",
"Zen-G DELALE",
"Massaka - Katliam 3",
"Ceza - Suspus",
"No.1 - Dünya Gül Bana"
]
const tonslip = box[Math.floor(Math.random() * box.length)];

message.channel.send(
new discord.MessageEmbed()
.setTitle("Rastgele Şarkı")
.setImage("")
.setDescription(tonslip)
  )
}

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['rş'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'Rastgele Şarkı',//Komutun adı (Komutu girerken lazım olucak)
  category: 'kullanıcı',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  description: 'Rastgele bir şarkı atar',//Komutun Açıklaması
  usage: 'rastgele-şarkı' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}