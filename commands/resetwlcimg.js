const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "resetwlcimg",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<a:no:997879343999111280> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:no:997879343999111280> **I do not have the correct permissions**')
		  
			db.delete(`url_${message.guild.id}`)
		   return await message.channel.send("<a:yes:997879349170684064> **Reseted welcome image**")
		
	}
}