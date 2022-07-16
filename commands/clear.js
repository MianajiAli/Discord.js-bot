const Discord = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: "clear",

    async run (client, message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:no:997879343999111280> **You can not use this command | Permission: MANAGE_MESSAGES**");
		if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:no:997879343999111280> **I do not have the correct permissions**')
		if(!args[0]) return message.channel.send("**Please provide a number of messages to be cleared**");
		message.channel.bulkDelete(args[0]).then(() => {
		  message.channel.send(`<a:yes:997879349170684064> **Cleared ${args[0]} messages**`);
		});
		  
	}
} 