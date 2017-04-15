const discord = require('discord.js'),
client = new discord.Client();
const token = "Mjk4NTQwODI1ODc1NTc4ODgw.C8_U7Q.lfxNWfL-dI2TGbiO4eQtvpo2HlQ";
const prefix = "?";
client.login(token);
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
	}
});

client.on('message', message =>{
    if(message.content.startsWith(prefix + 'add')){
        message.reply('Add me: **https://discordapp.com/oauth2/authorize?client_id=298540825875578880&scope=bot&permissions=2146958463**');
    }
    if(message.content.startsWith(prefix + 'clear')){
        var chiffre = message.content.substr(6);
        let myRole = message.guild.roles.find("name", "Admin");
        let interdit = "1";
            if(message.member.roles.has(myRole.id)){
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
    }
     if (message.content == "addbot"){
        message.channel.sendMessage('Hey, add me: **https://discordapp.com/oauth2/authorize?client_id=298540825875578880&scope=bot&permissions=2146958463**');
    }
     });


client.on('message', message =>{
    if(message.content.startsWith(prefix + 'lmao')){
        message.channel.sendMessage('LMAO')
        message.channel.sendFile('lmao.jpg');
}
});

client.on('message', message=>{
    if(message.content.startsWith(prefix + 'help')){
        message.channel.sendMessage('`Check your DMs` :ok_hand:');
        message.author.sendMessage('Commands: ```lmao, ah, help, clear, add, ping, highway```');
    }
});

client.on('message', message =>{
    if(message.content.startsWith(prefix + 'ah')){
        message.channel.sendMessage('AH !')
        message.channel.sendFile('AH.jpg');
}
});

client.on('message', message =>{
    if (message.content == "AH"){
        message.channel.sendFile('AH2.png')
    }
});

client.on('message', message =>{
    if (message.content.startsWith(prefix + 'game')){
        client.user.setGame('?help | ?add By CreepsoGaming');
    }

});

client.on('message', message =>{
   if (message.content.startsWith(prefix + 'ping')){
        message.channel.sendMessage('PONG !');
   }else{ if (message.content == 'ping')
        message.channel.sendMessage('PONG !');
    }

});

client.on('message', message =>{
    if (message.content.startsWith(prefix + 'highway')){
        message.reply('Tu devras remercier @🍪 Highway Traffic 🍪#0212 pour l\'aide qu\'il a fourni a mon créateur ! C\'est un truc de malade !')
    }
})

//----------------------------------------------------------------------------
const now = require('performance-now');
const helper = require('../helper');
const request = require("superagent");

module.exports = (bot, db, guildDocument, msg, params) => {
            var debut = new Date();
              var mentionned = msg.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned; 
      } else {
          var getvalueof = msg.author;
      }
request('http://www.google.com', function (error, response, body) {
     var fin = new Date();
    var tempsMs = fin.getTime() - debut.getTime();
    msg.channel.sendMessage({
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
}) });
};
