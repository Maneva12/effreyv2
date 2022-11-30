const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "sa-as",
  description: "SA-AS Sistemini Ayarlayan Komuttur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Bu Komutu Kullanmak İçin Yeterli Yetkinin Olması Gerek.", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("#000000")
    .setDescription("✅ **Sistem Kapatıldı** \n Artık Bot Selam Mesajlarına Cevap Vermeyecektir.")
    const embed2 = new EmbedBuilder()
    .setColor("#000000")
   .setDescription("✅ **Sistem Açıldı** \n Artık Bot Selam Mesajlarına Cevap Verecektir.")
 
 let slm = db.fetch(`saas_${interaction.guild.id}`);
 
 if (slm)  {
 
     db.delete(`saas_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!slm)  {
 
     db.set(`saas_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};
