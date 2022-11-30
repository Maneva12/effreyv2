const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "afk",
  description: "AFK Moduna Geçme Komutudur.",
  type: 1,
  options: [
    {
        name:"sebep",
        description:"AFK Olmak İçin Sebebini Belirt.",
        type:3,
        required:true
    },
  ],

  run: async(client, interaction) => {
    const sebep = interaction.options.getString('sebep')
    db.set(`afk_${interaction.user.id}`, sebep);
    interaction.reply("AFK Olma İşlemi Tamamlandı.")

    

  }

};
