const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const oykullan = new Discord.MessageEmbed()
  .setColor("PİNK")
  .setTitle("Hala oy kullanmadınmı?")
  .setDescription("[__**Oy Kullan**__](https://top.gg/servers/464336345934987265/vote)")
  .setTimestamp()
  message.channel.send(oykullan)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oy'],
  permLevel: 0
};

exports.help = {
  name: 'oykullan',
  description: '',
  usage: 'oykullan'
};