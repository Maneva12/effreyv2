const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-oluştur",
    description: 'Sunucuda Yeni Rol Oluşturma Komutudur.',
    type:1,
    options: [
        {
            name:"isim",
            description:"Oluşturulacak Olan Rolün İsmini Giriniz.",
            type:3,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Rolleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const isim = interaction.options.getString('isim')
   interaction.guild.roles.create({name: isim})
    interaction.reply({content: "**"+isim+"** İsimli Rol Başarıyla Oluşturulmuştur."})
}

};
