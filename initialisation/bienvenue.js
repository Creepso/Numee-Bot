function bienvenue(message, client) {

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'bienvenue');
    if(!channel) return;
    channel.createInvite({
            temporary : false
        }).then(url=>{
    channel.send("Bienvenue <@" + member.id + "> sur " + member.guild.name + '\n' + 
    "Invite tes amis à nous rejoindre : http://discord.gg/" + url.code);
        });
   const channel1 = member.guild.channels.find('name', 'welcome');
    if(!channel1) return;
    channel1.createInvite({
            temporary : false
        }).then(url=>{
    channel1.send("Bienvenue <@" + member.id + "> sur " + member.guild.name + '\n' + 
    "Invite tes amis à nous rejoindre : http://discord.gg/" + url.code);
     console.log(member.guild.name + ' ' + url.code);
        });
});

module.export = bienvenue
