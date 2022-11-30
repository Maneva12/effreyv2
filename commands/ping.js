const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun Gecikmesini Gösteren Komuttur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder().setDescription(`Bot Gecikmesi: ***${client.ws.ping}ms***`).setColor("#00ff00") ], ephemeral: true })

  }

};
