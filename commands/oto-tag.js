const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-tag",
    description: 'Sunucuya Gelenlere Otomatik Olarak Tag Verme Komutudur.',
    type:1,
    options: [
        {
            name:"tag",
            description:"Sunucuya Gelenlere Otomatik Olarak Verilecek Tagı Belirt.",
            type:3,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\İsimleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const tag = interaction.options.getString('tag')
    db.set(`ototag_${interaction.guild.id}`, tag)
    interaction.reply({content: "Ototag Sistemi Aktifleştirildi. Artık Yeni Gelen Üyelere Verilecek Olan Tag "+tag+" Olarak Ayarlandı."})
}

};
