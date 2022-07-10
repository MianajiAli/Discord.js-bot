const color = require('../colors.json')
const Discord = require('discord.js');



module.exports = {
    name: "unlock",


    async run (client, message, args) {
		if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<a:alert:995652726543355975> **You can not use this command | Permission: MANAGE_CHANNELS**")
		if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:alert:995652726543355975> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
		
		let msg = await message.channel.send("**Please wait**")
	
		try {
			message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
				SEND_MESSAGES: true,
				ADD_REACTIONS: true
			})
			msg.edit("<a:verify:995645296736481320> **Successfully unlocked the channel**")
		}catch(e) {
			console.log(e)
		}
	}
}