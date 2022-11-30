const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kanal-açıklama",
  description: "Belirttiğiniz Kanalın Açıklamasını Değiştiren Komuttur.",
  type: 1,
  options: [
    {
        name:"kanal",
        description:"Açıklaması Değiştirilecek Olan Kanalı Belirt.",
        type:7,
        required:true,
        channel_types:[0]
    },
    {
        name:"açıklama",
        description:"Girilecek Olan Kanal Açıklamasını Yazın.",
        type:3,
        required:true
    },
    
],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "Kanalları Yönet Yetkin Yok!", ephemeral: true})
    const aciklama = interaction.options.getString('açıklama')
    const kanal2 = interaction.options.getChannel('kanal')
    client.channels.cache.get(kanal2.id).setTopic(aciklama)
interaction.reply("<#"+kanal2+"> Kanalının Açıklaması Başarıyla **"+aciklama+"** Olarak Değiştirildi.")

  }

};
