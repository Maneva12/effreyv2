const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"onayla",
    description: 'Onaylama Sistemini Ayarlayan Komuttur.',
    type:1,
    options: [
        {
            name:"kullanıcı",
            description:"Kayıt Edeceğin Kullanıcıyı Belirt.",
            type:6,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Rolleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const kullanıcı = interaction.options.getMember('kullanıcı')
let kayıtlı = db.fetch(`kayıtlı_${interaction.guild.id}`)
if (!kayıtlı) return interaction.reply("Onaylı Rol Ayarlanmamış!")
interaction.guild.members.cache.get(kullanıcı.id).roles.add(kayıtlı)

    interaction.reply({content: `Başarıyla ${kullanıcı} Kullanıcısını Sunucunda Onayladım.`})
}

};
