const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2021-04-14 16:46:00");
  let zaman = ms(yilbasi - Date.now());//Fwhy Code

return message.channel.send(
    `:meat_on_bone: **Orucun Açılmasına Dair Bilgiler Aşağıda;** \n  \n> Gün: **${zaman.days}** \n \n> Saat: **${zaman.hours}** \n \n> Dakika: **${zaman.minutes}** \n \n:white_check_mark: **Orucun Açılmasına Bu Kadar Zaman Kaldı!**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['iftar-emet'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "iftar",

  description:
    "Orucun Açılmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: "iftar"
};
