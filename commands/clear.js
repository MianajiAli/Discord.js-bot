const Discord = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: "clear",

    async run (client, message, args) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:pepeno:997843592955580466> **You can not use this command | Permission: MANAGE_MESSAGES**");
		if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<:pepeno:997843592955580466> **I do not have the correct permissions**')
		if(!args[0]) return message.channel.send("**Please provide a number of messages to be cleared**");
		message.channel.bulkDelete(args[0]).then(() => {
		  message.channel.send(`<:peppoyes:997843596290052177> **Cleared ${args[0]} messages**`);
		});
		  
	}
} 