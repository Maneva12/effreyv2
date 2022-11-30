const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
  name: "oylama",
  description: "Sunucuda Oylama Başlatma Komutudur.",
  type: 1,
  options: [
    {
        name:"oylaman",
        description:"Oylama Konusunu Belirt.",
        type:3,
        required:true
    },
  ],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\İsimleri Yönet`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})

    const oylama = interaction.options.getString('oylaman')
    const embed = new EmbedBuilder()
    .setTitle("Effrey Oylama Sistemi")
    .setDescription(`Oylama: **${oylama}**`)
    .setColor("00ff00")
interaction.channel.send({embeds: [embed]}).then((mesaj) => {
interaction.reply({content: "Belirttiğin Oylama Başarıyla Başlatıldı.", ephemeral: true}) 
mesaj.react("✅")
mesaj.react("❌")

})
  }

};
