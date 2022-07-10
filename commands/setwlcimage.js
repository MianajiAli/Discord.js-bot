const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "setwlcimg",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<a:alert:995652726543355975> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:alert:995652726543355975> **I do not have the correct permissions**')
		  
			if(!args[0]) {
			return message.channel.send("<a:alert:995652726543355975> **Please give the link of the image**")
		  } 
		  
		  if(args[1]) {
			return message.channel.send("<a:alert:995652726543355975> **You can not set a double argument**")
		  }
		  
		  db.set(`url_${message.guild.id}`, args[0])
		await message.channel.send(`<a:verify:995645296736481320> **Welcome image seted to ${args[0]}**`)
	}
}