const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"avatar",
    description: 'Kullanıcıların Avatarına Bakma Komutudur.',
    type:1,
    options: [
        {
            name:"kullanıcı",
            description:"Avatarına Bakmak İstediğin Kullanıcıyı Belirt.",
            type:6,
            required:true
        },
      
    ],
  run: async(client, interaction) => {

    const user = interaction.options.getMember('kullanıcı')
   
    interaction.reply(user.displayAvatarURL({ dynamic: true, size: 1024 }))
}

};
