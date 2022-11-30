const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"onaylı-rol",
    description: 'Onaylama Sistemi İçin Gerekli Olan Kayıtlı Rolünü Ayarlayan Komuttur.',
    type:1,
    options: [
        {
            name:"rol",
            description:"Onaylı Rol Olarak Ayarlanacak Rolü Belirt.",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Rolleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    db.set(`kayıtlı_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "Onaylı Kullanıcı Rolü <@&"+rol+"> Olarak Ayarlandı."})
}

};
