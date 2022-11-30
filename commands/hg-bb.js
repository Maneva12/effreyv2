const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"giriş-çıkış",
    description: 'Sunucuya Giren-Çıkan Kullanıcılar İçin Mesaj Ayarlayan Komuttur.',
    type:1,
    options: [
        {
            name:"ayarla",
            description:"Giriş-Çıkış Sistemi Kurulumu",
            type:1,
            options:[{name:"kanal",description:"Giriş-Çıkış Kanalını Ayarlar.",type:7,required:true,channel_types:[0]}]            
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "Kanalları Yönet Yetkin Yok!", ephemeral: true})
    const kanal2 = interaction.options.getChannel('kanal')
   db.set(`hgbb_${interaction.guild.id}`, kanal2.id)
   interaction.reply("Giriş-Çıkış Kanalı <#"+kanal2+"> Olarak Ayarlanmıştır.")
}

};
