const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun Komutlarını Size Farklı Kategorilerde Sunan Bir Hizmet Komutudur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Effrey Bot Yardım Menüsü")
    .setThumbnail('https://cdn.discordapp.com/attachments/1038736692477177916/1040626356209336451/Effrey.png')
    .setDescription(`
> :white_small_square: Bot Slash Komutlarıyla Çalışmaktadır. Prefix: /
> :white_small_square: Yapımcı: mâneva#1931

*Yardım Alabileceğiniz Komutlar;*

:white_small_square: \`Moderasyon\` **Butonuna Tıklayarak Moderasyon Komutları Hakkında Bilgi Öğrenebilirsiniz.**
:white_small_square: \`Kayıt\` **Butonuna Tıklayarak Kayıt Komutları Hakkında Bilgi Öğrenebilirsiniz.**
:white_small_square: \`Kullanıcı\` **Butonuna Tıklayarak Kullanıcı Komutları Hakkında Bilgi Öğrenebilirsiniz.**

*Effrey Bot Hakkında;*
:white_small_square: [Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=1039575749771927662&permissions=8&scope=bot%20applications.commands)
:white_small_square: Destek Sunucusu: Yakında Eklenecektir.`)
    
    .setColor("#000000")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("kullanıcı"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};
