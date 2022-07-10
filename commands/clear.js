const Discord = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: "clear",

    async run (client, message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:alert:995652726543355975> **You can not use this command | Permission: MANAGE_MESSAGES**");
		if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:alert:995652726543355975> **I do not have the correct permissions**')
		if(!args[0]) return message.channel.send("**Please provide a number of messages to be cleared**");
		message.channel.bulkDelete(args[0]).then(() => {
		  message.channel.send(`<a:verify:995645296736481320> **Cleared ${args[0]} messages**`);
		});
		  
	}
} 