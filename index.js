const discord = require('discord.js'),
client = new discord.Client();
const token = "Mjk4NTQwODI1ODc1NTc4ODgw.C9OT6g.XXmUCpCGxsJMTKc2tqjH8IiCSaE";
const prefix = "?";
//embed_object = discord.Embed(color=my_color, title="my title")
 
client.on('ready', () =>{
    console.log('Patiente un peu...')
    console.log('C\'est bon ! Je peut débuter tes commandes ! :)')
    client.user.setGame('?help | ?add By CreepsoGaming');
});
 
client.on('message', message =>{
    if(message.content.startsWith(prefix + 'test')){
        message.reply('Je fonctionne :)');
    }
    else if (message.content == "test"){
        message.channel.sendMessage('Je fonctionne :)');
    }else if(message.content.startsWith(prefix + 'add')){
        message.reply('Add me: **https://discordapp.com/oauth2/authorize?client_id=298540825875578880&scope=bot&permissions=2146958463**');
    }else if(message.content.startsWith(prefix + 'clear')){
        var chiffre = message.content.substr(6);
        let Admin = message.guild.roles.find("name", "Admin", "Co-Fonda", "Modo");
        let Mod = message.guild.roles.find("name","Mod");
        let Fondateur = message.guild.roles.find("name", "Fondateur");
        let Owner = message.guild.roles.find("name", "Owner");
        let Fonda = message.guild.roles.find("name", "Fonda");
        let CoFondateur = message.guild.roles.find("name", "Co-Fondateur")
        let CoFonda = message.guild.roles.find("name", "Co-Fonda")
        let Modo = message.guild.roles.find("name", "Modo")
        let CoOwner = message.guild.roles.find("name", "Co-Owner")
        let Founder = message.guild.roles.find("name", "Founder")
        let Founders = message.guild.roles.find("name", "Founders")
        let DevY =message.guild.roles.find("name", "Dev_Y")
        let interdit = "1";
            if(message.member.roles.has(Admin.id, Mod.id, Fondateur.id, Owner.id, Fonda.id, CoFondateur.id, CoFonda.id, Modo.id, CoOwner.id, Founder.id, Founders.id, DevY.id)){
                if(chiffre === ''){
                    return message.reply('WARNING ! Incorrect syntax ! You are gonna delete the entire channel content');
                }else{
                    if (chiffre === interdit){
                        return message.reply('Error : Nodejs 4632, incorrect valor...');
                    }else{
                        message.channel.bulkDelete(chiffre);
                    }
                }
        } else {
            message.reply('You don\'t have the access to this command..').then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
}
    }else if (message.content == "addbot"){
        message.channel.sendMessage('Hey, add me: **https://discordapp.com/oauth2/authorize?client_id=298540825875578880&scope=bot&permissions=2146958463**');
    }
      
 
 
    if(message.content.startsWith(prefix + 'lmao')){
        message.channel.sendMessage('LMAO')
        message.channel.sendFile('lmao.jpg');
};
 
 
    if(message.content.startsWith(prefix + 'help')){
        message.channel.sendMessage('`Check your DMs` :ok_hand:');
        message.author.sendMessage('Commands: ```lmao, ah, help, clear, add, ping, highway```');
 };
 
 
    if(message.content.startsWith(prefix + 'ah')){
        message.channel.sendMessage('AH !')
        message.channel.sendFile('AH.jpg');
};
 
 
    if (message.content == "AH"){
        message.channel.sendFile('AH2.png')
};
 
 
    if (message.content.startsWith(prefix + 'game')){
        client.user.setGame('?help | ?add By CreepsoGaming');
    };
 
   
 
//client.on('message', message =>{
    if (message.content.startsWith(prefix + 'highway')){
        message.reply('Tu devras remercier @🍪 Highway Traffic 🍪#0212 pour l\'aide qu\'il a fourni a mon créateur ! C\'est un truc de malade !')
    };
 
//----------------------------------------------------------------------------
if (message.content.startsWith(prefix + 'ping')){
const now = require('performance-now');
const request = require("superagent");
 
            var debut = new Date();
              var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
      }
request('http://www.google.com', function (error, response, body) {
     var fin = new Date();
    var tempsMs = fin.getTime() - debut.getTime();
    message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Ping',
            value:  tempsMs/(5*2) + ' ms',
            inline: true
          }],
          color: 0x00FF00,
          footer: {
            text: 'by CreepsoGaming',
            proxy_icon_url: ' '
          },
           author: {
            name: getvalueof.username,
            icon_url: getvalueof.avatarURL,
            proxy_icon_url: ' '
          }
        }
}) })
}
 

});

client.login(token)
