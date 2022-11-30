const { PermissionsBitField } = require("discord.js");
module.exports = {
    name:"kick",
    description: 'Belirtilen Kullanıcıyı Sunucudan Atma Komutudur.',
    type:1,
    options: [
        {
            name:"kullanıcı",
            description:"Sunucudan Atılacak Kullanıcıyı Belirt.",
            type:6,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Üyeleri At`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const user = interaction.options.getMember('kullanıcı')
    if(user.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({content:"Bu Kullanıcının \`Üyeleri At\` Yetkisi Bulunduğu İçin Sunucudan Atma İşlemi İptal Edildi.",ephemeral:true})
    user.kick();
    interaction.reply({content: "Belirttiğin Kullanıcı Sunucudan Başarıyla Atıldı."})
}

};
