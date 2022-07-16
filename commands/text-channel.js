const Discord = require('discord.js');

module.exports = {
    name: "text-channel",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:pepeno:997843592955580466> **You can not use this command | Permission: ADMINISTRATOR**');
		if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<:pepeno:997843592955580466> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
		
		if(!args[0]) return message.channel.send('**Please include a name for the channel**');
		message.guild.channels.create(args.slice(0).join("	"), {type: 'text'}), message.channel.send('<:peppoyes:997843596290052177> **Text channel created**');
	}
}	
