const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "istatistik",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle('Effrey Bot İstatistik')
    .setThumbnail('https://cdn.discordapp.com/attachments/1038736692477177916/1040626356209336451/Effrey.png')
    .addFields({ name: ':white_small_square: Bot Sahibi', value: `mâneva#1931`, inline: false})
    .addFields({ name: ':white_small_square: Ping', value: `${client.ws.ping}`, inline: true})
    .addFields({ name: ':white_small_square: Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: ':white_small_square: Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: ':white_small_square: Kullanıcılar', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: ':white_small_square: Sunucular', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: ':white_small_square: Kanallar', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: ':white_small_square: İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: ':white_small_square: Discord.JS sürüm', value: `14.2.0`, inline: true})
    .addFields({ name: ':white_small_square: Komut Sayısı', value: `28`, inline: true})
    
    interaction.reply({embeds: [embed]})
  }

};