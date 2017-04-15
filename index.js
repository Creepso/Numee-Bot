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
 
    else if (message.content == "addbot"){
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
}) }) }}),
// ------------------------------------------------------
//Partie Admin
  //Delete
  client.on('message', message => {

  if(message.content.startsWith(prefix + 'clear')){
    var suppression = message.content.substr(6);
    let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"); //recuperer les droits necessaire
    let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //recuperer les droits necessaire
    if(!myrole){ 
      return message.reply("I don't have the permissions.");
    }
    if(!yourole){
      return message.reply(":no_entry: You don't have the correct permissions. :no_entry:").then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
    }
    if(suppression ==''){
      return message.reply("Sorry, you didn't give arguments, set a number between 2 and 100").then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
    }
    if(suppression <= 1){
      return message.reply("Sorry, i can't do that, set a number between 2 and 100").then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
    }
    if(suppression >= 101){
       return message.reply("Sorry, i can't do that, set a number between 2 and 100").then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
    }
    message.channel.bulkDelete(suppression);
   message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Success !',
            value:  'Content deleted !',
            inline: true
          }],
          color: 0x06DF00,
          footer: {
            text: 'by CreepsoGaming',
        }
      }}).then(response => { response.delete(5000) });
  }});
 
client.login(token)
