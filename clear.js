if (message.content.startsWith(prefix + "clear")) {
      let myrole = message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"); //recuperer les droits necessaire
      let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //recuperer les droits necessaire
            if(!myrole){
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas les perms :no_entry_sign: ",
          footer: {
            text: "Message par " + name + "."
          }
        }}).catch(console.error);
      } 
      if(!message.member.roles.has(myrole.id)) {
        return   message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par " + name + "."
          }
        }}).catch(console.error);
      }





      var args = message.content.substr(6);
      if(args.length === 0){
        message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x: Vous n'avez pas précisser le nombre :x: ",
          footer: {
            text: "Message par " + name + "."
          }
        }});
      }
      else {
        var msg;
        if(args.length === 1){
        msg = 2;
      } else {
        msg = parseInt(args[1]);
      }
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Success!",
        color: 0x06DF00,
        description: "Messages Suprimé!",
        footer: {
          text: "Message par " + name + "."
        }
      }});
      }
  }
