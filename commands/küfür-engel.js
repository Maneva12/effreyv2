const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "küfür-engel",
  description: "Küfür Engelleme Sistemini Ayarlayan Komuttur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanabilmek İçin `\Yönetici`\ Yetkisine Sahip Olman Gerek.", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("#00FF00")
    .setDescription("✅ **Sistem Kapatıldı** \n Artık Küfür Edildiğinde Bot Herhangi Bir Tepki Göstermeyecektir.")
    const embed2 = new EmbedBuilder()
    .setColor("#00FF00")
   .setDescription("✅ **Sistem Açıldı** \n Artık Küfür Edildiğinde Bot Küfür İçerikli Mesajlara Tepki Gösterecektir.")
 
 let küfür = db.fetch(`kufurengel_${interaction.guild.id}`);
 
 if (küfür)  {
 
     db.delete(`kufurengel_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!küfür)  {
 
     db.set(`kufurengel_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};
