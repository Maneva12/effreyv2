const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "kurucukim",
  description: "Sunucunun Sahibini Gösteren Komuttur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const owner = interaction.guild.members.cache.get(interaction.guild.ownerId);
interaction.reply(`${owner} Bu Sunucunun Sahibidir.`)
  }

};
