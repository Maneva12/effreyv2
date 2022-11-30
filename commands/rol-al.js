const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-al",
    description: 'Sunucudaki Herhangi Bir Kullanıcıdan Bulunan Rolü Geri Alma Komutudur.',
    type:1,
    options: [
        {
            name:"kullanıcı",
            description:"Rolü Alınacak Olan Kullanıcıyı Belirt.",
            type:6,
            required:true
        },
        {
            name:"rol",
            description:"Alınacak Olan Rolü Belirt.",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Rolleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    const user = interaction.options.getMember('kullanıcı')
    interaction.guild.members.cache.get(user.id).roles.remove(rol)
    interaction.reply({content: "<@"+user+"> Adlı Kullanıcıda Bulunan <@&"+rol.id+"> Rolü Kullanıcıdan Geri Alınmıştır."})
}

};
