const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"forceban",
    description: `ID'sini Girdiğiniz Kullanıcıyı Sunucudan Yasaklayan Komuttur.`,
    type:1,
    options: [
        {
            name:"id",
            description:"Yasaklamak İstediğiniz Kullanıcının ID'sini Giriniz.",
            type:3,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Üyeleri Yasakla`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const id = interaction.options.getString('id')
  interaction.guild.members.ban(id).catch(() => {})
interaction.reply(id+ " ID'li Kullanıcı Sunucudan Başarıyla Yasaklandı.")
}

};
