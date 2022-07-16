const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "resetwlcmsg",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<:pepeno:997843592955580466> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<:pepeno:997843592955580466> **I do not have the correct permissions**')
		  
			db.delete(`msg_${message.guild.id}`)
		   return await message.channel.send("<:peppoyes:997843596290052177> **Reseted welcome message**")
		  
	}
}