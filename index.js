const { Client, GatewayIntentBits, Partials } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("croxydb")
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs")
const { TOKEN } = require("./config.json");
readdirSync('./commands').forEach(f => {
  if(!f.endsWith(".js")) return;

 const props = require(`./commands/${f}`);

 client.commands.push({
       name: props.name.toLowerCase(),
       description: props.description,
       options: props.options,
       dm_permission: props.dm_permission,
       type: 1
 });

console.log(`[COMMAND] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

  const eve = require(`./events/${e}`);
  const name = e.split(".")[0];

  client.on(name, (...args) => {
            eve(client, ...args)
        });
console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(process.env.token)

client.on("guildMemberAdd", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `:partying_face: | ${member} Sunucuya Katıldı! Sunucumuz **${member.guild.memberCount}** Kişi Oldu.`})
})

client.on("messageCreate", async message => {
  const db = require("croxydb");

  if (await db.get(`afk_${message.author.id}`)) {
   
    db.delete(`afk_${message.author.id}`);

    message.reply("AFK Modundan Çıkış Yapıldı.");
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.get(`afk_${kullanıcı.id}`);

  if (sebep) {
    message.reply("Etiketlediğin Kullanıcı **"+sebep+"** Nedeniyle AFK Modunda Bulunmaktadır.");
  }
});
client.on("guildMemberAdd", member => {
  const rol = db.get(`otorol_${member.guild.id}`)
  if(!rol) return;
  member.roles.add(rol).catch(() => {})

})
client.on("guildMemberAdd", member => {
  const tag = db.get(`ototag_${member.guild.id}`)
  if(!tag) return;
  member.setNickname(`${tag} | ${member.displayName}`)
})
client.on("guildMemberRemove", member => {
  const kanal = db.get(`hgbb_${member.guild.id}`)
  if(!kanal) return;
  member.guild.channels.cache.get(kanal).send({content: `:cry: | ${member} Sunucudan Ayrıldı! Sunucumuz **${member.guild.memberCount}** Kişi Oldu.`})
})

client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let kufur = db.fetch(`kufurengel_${message.guild.id}`)
  if(!kufur) return;
  
  if(kufur) {
  const kufurler = [
    
    "amk",
    "piç",
    "yarrak",
    "oç",
    "göt",
    "amq",
    "yavşak",
    "amcık",
    "amcı",
    "orospu",
    "sikim",
    "sikeyim",
    "aq",
    "mk",
    "sq",
    "pezevenk",
    "ananı",
    "allahını",
    "skm",
    "sqtr",
       
  ]
  
if(kufurler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`<@${message.author.id}>, Bu Sunucuda Küfür Engelleme Açık Bulunmaktadır. Küfür İçerikli Mesajlarınız Otomatik Olarak Silinmektedir.`)
}
}
})
client.on("messageCreate", (message) => {
  const db = require("croxydb")
  let reklamlar = db.fetch(`reklamengel_${message.guild.id}`)
  if(!reklamlar) return;
  
  if(reklamlar) {

  const linkler = [
    
    ".com.tr",
    ".net",
    ".org",
    ".tk",
    ".cf",
    ".gf",
    "https://",
    ".gq",
    "http://",
    ".com",
    ".gg",
    ".porn",
    ".edu"
       
  ]
  
if(linkler.some(alo => message.content.toLowerCase().includes(alo))) {
message.delete()
message.channel.send(`<@${message.author.id}>, Bu Sunucuda Reklam Engel Sistemi Aktiftir. Reklam İçerikli Mesajların Otomatik Olarak Silinmektedir. `)
}
}
})

client.on("messageCreate", (message) => {
  
  let saas = db.fetch(`saas_${message.guild.id}`)
  if(!saas) return;
  
  if(saas) {
  
  let selaamlar = message.content.toLowerCase()  
if(selaamlar === 'sa' || selaamlar === 'slm' || selaamlar === 'sea' || selaamlar === ' selamünaleyküm' || selaamlar === 'Selamün Aleyküm' || selaamlar === 'selam'){

message.channel.send(`<@${message.author.id}> Aleyküm Selam Kardeş.`)
}
}
})
client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)  
  if(interaction.customId == "moderasyon") {
const embed = new Discord.EmbedBuilder()
.setTitle("Effrey Bot Moderasyon Komutları")
.setThumbnail('https://cdn.discordapp.com/attachments/1038736692477177916/1040626356209336451/Effrey.png')
.setDescription(":white_small_square: /ban-list - **Sunucudaki Banlı Kullanıcıları Liste Olarak Gösteren Komuttur.**\n:white_small_square: /ban - **Belirtilen Kullanıcıyı Sunucudan Yasaklama Komutudur.**\n:white_small_square: /emojiler - **Sunucudaki Emojileri Gösteren Komuttur.**\n:white_small_square: /forceban - **ID'sini Girdiğiniz Kullanıcıyı Sunucudan Yasaklayan Komuttur.**\n:white_small_square: /giriş-çıkış - **Sunucuya Giren-Çıkan Kullanıcılar İçin Mesaj Ayarlayan Komuttur.**\n:white_small_square: /kanal-açıklama - **Belirttiğiniz Kanalın Açıklamasını Değiştiren Komuttur.**\n:white_small_square: /kick - **Belirtilen Kullanıcıyı Sunucudan Atma Komutudur.**\n:white_small_square: /küfür-engel - **Küfür Engelleme Sistemini Ayarlayan Komuttur.**\n:white_small_square: /oto-rol - **Sunucuya Gelenlere Otomatik Olarak Verilecek Olan Rolü Ayarlama Komutudur.**\n:white_small_square: /oto-tag - **Sunucuya Gelenlere Otomatik Olarak Tag Verme Komutudur.**\n:white_small_square: /oylama - **Sunucuda Oylama Başlatma Komutudur.**\n:white_small_square: /reklam-engel - **Reklam Engelleme Sistemini Ayarlayan Komuttur.**\n:white_small_square: /rol-al - **Sunucudaki Herhangi Bir Kullanıcıdan Bulunan Rolü Geri Alma Komutudur.**\n:white_small_square: /rol-oluştur - **Sunucuda Yeni Rol Oluşturma Komutudur.**\n:white_small_square: /rol-ver - **Sunucudaki Herhangi Bir Kullanıcıya Sunucuda Bulunan Bir Rolü Verme Komutudur.**\n:white_small_square: /sa-as - **SA-AS Sistemini Ayarlayan Komuttur.**\n:white_small_square: /sil - **Herhangi Bir Sunucu Chatinde Bulunan Mesajları Kolayca Silmeye Yarayan Komuttur.**\n:white_small_square: /unban - **Sunucudan Yasaklanan Kullanıcıların Yasaklanmasını Kaldırma Komutudur.**")
.setColor("#000000")
interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
  if(interaction.customId == "kayıt") {
    const embed = new Discord.EmbedBuilder()
    .setTitle("Effrey Bot Kayıt Komutları")
    .setThumbnail('https://cdn.discordapp.com/attachments/1038736692477177916/1040626356209336451/Effrey.png')
    .setDescription(":white_small_square: /kayıtlı-rol - **Kayıt Sistemi İçin Gerekli Olan Kayıtlı Rolünü Ayarlayan Komuttur.**\n:white_small_square: /kayıt-et - **Kayıt Sistemini Ayarlayan Komuttur.**")
    .setColor("#000000")
    interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
  if(interaction.customId == "kullanıcı") {
    const embed = new Discord.EmbedBuilder()
    .setTitle("Effrey Bot Kullanıcı Komutları")
    .setThumbnail('https://cdn.discordapp.com/attachments/1038736692477177916/1040626356209336451/Effrey.png')
    .setDescription(":white_small_square: /avatar - **Kullanıcıların Avatarına Bakma Komutudur.**\n:white_small_square: /afk - **AFK Moduna Geçme Komutudur.**\n:white_small_square: /emoji-yazı - **Yazacağın Yazıyı Emojiye Çeviren Bir Komuttur.**\n:white_small_square: /kurucu-kim - **Sunucunun Sahibini Gösteren Komuttur.**\n:white_small_square: /ping - **Botun Gecikmesini Gösteren Komuttur.**\n:white_small_square: /yardım - **Botun Komutlarını Size Farklı Kategorilerde Sunan Bir Hizmet Komutudur.**")
    .setColor("#000000")
    interaction.reply({embeds: [embed], components: [], ephemeral: true})
  }
})