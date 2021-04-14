const Discord = require("discord.js");

exports.run = function(client, message, args) {

const FwhyCode = message.mentions.users.first();

if (!FwhyCode)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setDescription(
      `${FwhyCode} ` + `**${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/819883798531014667/830523386823835668/tumblr_mig8j5RZzj1rv1kj1o1_1280.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "FwhyCode",
  usage: "[prefix]aduket-çek <etiket>"
};
