const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"ban",
    description: 'Belirtilen Kullanıcıyı Sunucudan Yasaklama Komutudur.',
    type:1,
    options: [
        {
            name:"kullanıcı",
            description:"Yasaklanacak Olan Kullanıcıyı Belirt.",
            type:6,
            required:true
        },
        {
            name:"sebep",
            description:"Yasaklanacak Olan Kullanıcının Yasaklanma Sebebini Yaz.",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Üyeleri Yasakla`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const user = interaction.options.getMember('kullanıcı')
    const sebep = interaction.options.getString('sebep')
    if(user.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content:"Bu Kullanıcının Ban Yetkisi Olduğu İçin Onu Yasaklayamadım.   ",ephemeral:true})
    user.ban({reason: sebep});
    interaction.reply({content: "Belirttiğin Kullanıcı Sunucudan Başarılı Bir Şekilde Yasaklanmıştır."})
}

};
