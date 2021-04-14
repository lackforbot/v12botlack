const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("PİNK")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=679375487247712276&scope=bot&permissions=805314622) \n [__**Destek Sunucusu**__](https://discord.gg/Q4saeY8) \n [__**Web Sitesi**__](https://lackteam.tr.gg)")
  .setTimestamp()
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};