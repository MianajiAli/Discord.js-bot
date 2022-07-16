const color = require('../colors.json')
const Discord = require('discord.js');



module.exports = {
    name: "lock",


    async run (client, message, args) {
		if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<:pepeno:997843592955580466> **You can not use this command | Permission: MANAGE_CHANNELS**")
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<:pepeno:997843592955580466> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
		
		let msg = await message.channel.send("**Please wait**")
	
		try {
			message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
				SEND_MESSAGES: false,
				ADD_REACTIONS: false
			})
			msg.edit("<:peppoyes:997843596290052177> **Successfully Locked the channel**")
		}catch(e) {
			console.log(e)
			
		}
	}
}