const discord = require('discord.js'),
client = new discord.Client();
const token = "Mjk4NTQwODI1ODc1NTc4ODgw.DCl5Cg.Ftil1VUHZVw-mglh9uO_aj8P-WE";
const prefix = "?";
var createur = "265180227511123981";
var createur_m = "<@265180227511123981>";
///embed_object = discord.Embed(color=my_color, title="my title")
 
client.on('ready', () =>{
  
    console.log('Patiente un peu...')
    console.log('C\'est bon ! Je peut débuter tes commandes ! :)')
    client.user.setGame('?help | ?add By CreepsoGaming');
});
 
client.on('message', message =>{
     memberCount = client.users.size;
     servercount = client.guilds.size;
    if(message.content === '?test'){
        message.reply('Je fonctionne :)');
    }
 
    else if (message.content === "addbot"){
        message.channel.sendMessage('Hey, add me: **https://discordapp.com/oauth2/authorize?client_id=298540825875578880&scope=bot&permissions=2146958463**');
    }

    if(message.content === '?add'){
      message.reply('Add me\(and have fun\): **https://discordapp.com/oauth2/authorize?client_id=298540825875578880&scope=bot&permissions=2146958463**')
    }
 
    if(message.content === '?lmao'){
        message.channel.sendMessage('LMAO')
        message.channel.sendFile('lmao.jpg');
};
 
 
    if(message.content === '?help'){
        message.channel.sendMessage('`Check your DMs` :ok_hand:');
        message.author.sendMessage('Commands: ```?lmao, ?ah, ?help, ?clear, ?add, ?ping, ?highway, ?test, ?say, ?dsay, ?servers, ?nameservers, ?idea \(No prefix:\) addbot, AH```');
 };
 
 
    if(message.content.startsWith(prefix + 'ah')){
        message.channel.sendMessage('AH !')
        message.channel.sendFile('AH.jpg');
};
 
 
    if (message.content == "AH"){
        message.channel.sendFile('AH2.png')
};
 
 
   if(message.content.startsWith(prefix + 'servers')) {
    var ServCount = client.guilds.size;
    message.reply('i\'m connected to `' + servercount + '` servers');
   };

 
   if(message.content.startsWith(prefix + 'nameservers')) {
    var ServNames = client.guilds.name;
    message.reply(`i'm connected to ${ServNames.length} servers`);
   };
 
    if (message.content.startsWith(prefix + 'idea')){
     message.reply('Hey ! If you have a great idea, send it to ' + createur_m + ', It\'s my founder !');
    };
 
 
    if (message.content.startsWith(prefix + 'say')){
     var say = message.content.substr(5);
     message.channel.sendMessage(say);
};
 
    if (message.content.startsWith(prefix + 'dsay')){
     message.delete(message.author);
     var dsay = message.content.substr(6);
     message.channel.sendMessage(dsay);
};
 
 if (message.content.startsWith(prefix + 'leave')){
 if (message.author.id == createur) {
  message.channel.sendMessage('Bye Bye ! :briefcase:');
  message.guild.leave().then(guild => console.log('J\'ai quitté la guilde', guild.name)).catch(console.log);
 }
 };
 
if(message.content.startsWith(prefix + 'jeu')){
if(message.author.id == createur){
var jeu = message.content.substr(4);
 client.user.setGame(jeu);
   message.reply('Changement effectué');
 }else{
 message.channel.sendMessage("Vous n'avez pas les permissions necessaires");
}
};

 
//client.on('message', message =>{
    if (message.content.startsWith(prefix + 'highway')){
        message.reply('Tu devras remercier @🍪 Highway Traffic 🍪#0212 pour l\'aide qu\'il a fourni a mon créateur ! C\'est un truc de malade !')
    };
 
 
 
 client.on('channelCreate',(channel, guild) => {
     if(channel.type == 'text'){
       let guild = channel.guild;
       guild.defaultChannel.sendMessage('Jarrive dans ta vie bro')
     }
 });
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
      return message.reply("Sorry, you didn't give arguments, set a number between 2 and 2000").then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
    }
    if(suppression <= 1){
      return message.reply("Sorry, i can't do that, set a number between 2 and 2000").then((message) => {
   setTimeout(() => { message.delete(); }, 5000);
});
    }
    if(suppression >= 2001){
       return message.reply("Sorry, i can't do that, set a number between 2 and 2000").then((message) => {
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
