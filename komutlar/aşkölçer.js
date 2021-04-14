exports.run = async (client, msg, args) => {
    let ask=[
      "Ona Olan Aşkınızı 💗💗💗🖤🖤🖤🖤🖤🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💗💗💗💗🖤🖤🖤🖤🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💗💗💗💗💗🖤🖤🖤🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💗💗💗💗💗💗🖤🖤🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💗💗💗💗💗💗💗🖤🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💗💗💗💗💗💗💗💗🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💗💗💗💗💗💗💗💗💗🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💖💖💖💖💖💖💖💖💖💖 Gösteriyor.",
      "Ona Olan Aşkınızı 💔💔💔💔💔💔💔💔💔💔 Gösteriyor.",
      "Ona Olan Aşkınızı 💔💔🖤🖤🖤🖤🖤🖤🖤🖤 Gösteriyor.",
      "Ona Olan Aşkınızı 💔🖤🖤🖤🖤🖤🖤🖤🖤🖤 Gösteriyor."
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['aşkölç'],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }