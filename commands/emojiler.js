const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "emojiler",
  description: "Sunucudaki Emojileri Gösteren Komuttur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

  
let animEmotes = [], staticEmotes = [];
interaction.guild.emojis.cache.forEach((x) => {
x.animated ? animEmotes.push(`<a:${x.name}:${x.id}>`) : staticEmotes.push(`<:${x.name}: ${x.id}>`);
})
const embed = new EmbedBuilder()
.setTimestamp()
.setColor('#000000')
.setTitle(`Bu Sunucuda Bulunan Emojiler`)
.setDescription(`${animEmotes} ${staticEmotes}`)
interaction.reply({embeds: [embed]})
  }

};
