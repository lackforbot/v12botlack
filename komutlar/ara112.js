const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(EmbedFwhyCode);
 
}
  if (message.channel.type !== "dm") {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Ambulans Geliyor!!!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("https://cdn.discordapp.com/attachments/819883798531014667/830519070386159636/ambulans-hareketli-resim-0020.gif");

return message.channel.send(EmbedFwhyCode);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ara112",
  description: "112yi arar",
  usage: "ara112"
};
