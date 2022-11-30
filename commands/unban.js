const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"unban",
    description: 'Sunucudan Yasaklanan Kullanıcıların Yasaklanmasını Kaldırma Komutudur.',
    type:1,
    options: [
        {
            name:"id",
            description:"Yasaklanan Kullanıcının ID'sini Belirt.",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Üyeleri Yasakla`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const user = interaction.options.getString('id')
    
    interaction.guild.members.unban(user)
    interaction.reply({content: "Belirttiğin ID'li Kullanıcının Yasaklanması Kaldırılmıştır."})
}

};