const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "resettext-wlc",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<a:alert:995652726543355975> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  
			db.delete(`wlctextch_${message.guild.id}`)
		   return await message.channel.send("<a:verify:995645296736481320> **Reseted text welcome channel**")
		  
	}
}