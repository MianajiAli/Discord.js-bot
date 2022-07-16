const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "setwlcmsg-embed",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<a:no:997879343999111280> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  
			if(!args[0]) {
			return message.channel.send("<a:no:997879343999111280> **Please give the message to set**")
		  }
		  
		  let msg = args.slice(0).join(" ")
		  
		  db.set(`emmsg_${message.guild.id}`, `${msg}`)
		await message.channel.send(`<a:yes:997879349170684064> **Embed welcome message seted to ${msg}**`)
	}
}