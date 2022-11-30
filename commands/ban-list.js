const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ban-list",
  description: "Sunucudaki Banlı Kullanıcıları Liste Olarak Gösteren Komuttur.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    var userlist = interaction.guild.bans.fetch()
    userlist.then(collection => {
    if(collection.first() == null){
      
    const embed = new EmbedBuilder()
    .setDescription("Bu Sunucuda Banlı Kullanıcı Bulunmamaktadır.")      
    .setColor("#000000")
    .setTitle("Hata")
    interaction.reply({embeds: [embed]})
      
    } else {
    const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(", ")
    const embed2 = new EmbedBuilder()
    .setTitle("Banlanan Kullanıcılar")
    .setColor("#000000")
    .setDescription(data)
    interaction.reply({embeds: [embed2]})
}

  })
}

};
