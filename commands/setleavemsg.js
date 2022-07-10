const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "setleavemsg",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<a:alert:995652726543355975> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  
			if(!args[0]) {
			return message.channel.send("<a:alert:995652726543355975> **Please give the message to set**")
		  }
		  
		  let msg = args.slice(0).join(" ")
		  
		  db.set(`leftmsg_${message.guild.id}`, `${msg}`)
		await message.channel.send(`<a:verify:995645296736481320> **Leave message seted to ${msg}**`)
	}
}