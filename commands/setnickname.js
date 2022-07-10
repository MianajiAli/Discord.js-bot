const Discord = require("discord.js");
const colors = require('../colors.json')
module.exports = {
  name: "setnickname",

  async run (client, message, args) {
    
  if (!message.member.hasPermission(["MANAGE_GUILD"])) {
    return message.channel.send({embed: {color: colors.main, description: "<a:alert:995652726543355975> **You can't use this command | Permission: MANAGE_GUILD**"}})
  }
  
  if(!message.guild.me.hasPermission(["CHANGE_NICKNAME"])) { 
    return message.channel.send({embed: {color: colors.main, description: '<a:alert:995652726543355975> **I do not have the correct permissions | Permission : CHANGE_NICKNAME**'}})
  }
  let user = message.mentions.users.first(); 
  if (!user) return message.channel.send({embed: {color: colors.main, description: "<a:alert:995652726543355975> **You need to mention the user**"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: colors.main, description: "<a:alert:995652726543355975> **You need to input the nickname**"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: colors.main, description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: colors.main, description: `<a:verify:995645296736481320> **Successfully changed** **${user.tag}** **nickname to** **${nick}**`}});
  }
}
