const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-rol",
    description: 'Sunucuya Gelenlere Otomatik Olarak Verilecek Olan Rolü Ayarlama Komutudur.',
    type:1,
    options: [
        {
            name:"rol",
            description:"Yeni Gelen Üyelere Otomatik Olarak Verilecek Olan Rolü Belirt.",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Rolleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    db.set(`otorol_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "Otorol Sistemi Aktifleştirildi. Yeni Gelecek Üyelere Verilecek Rol <@&"+rol+"> Olarak Ayarlandı."})
}

};
