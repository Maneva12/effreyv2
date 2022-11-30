const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-ver",
    description: 'Sunucudaki Herhangi Bir Kullanıcıya Sunucuda Bulunan Bir Rolü Verme Komutudur.',
    type:1,
    options: [
        {
            name:"kullanıcı",
            description:"Rol Verilecek Olan Kullanıcıyı Belirt.",
            type:6,
            required:true
        },
        {
            name:"rol",
            description:"Verilecek Olan Rolü Belirt.",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Rolleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    const user = interaction.options.getMember('kullanıcı')
    interaction.guild.members.cache.get(user.id).roles.add(rol)
    interaction.reply({content: "<@"+user+"> Adlı Kullanıcıya <@&"+rol.id+"> Rolü Verilmiştir."})
}

};
