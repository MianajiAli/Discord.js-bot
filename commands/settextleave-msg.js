const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "settextleave-msg",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<:pepeno:997843592955580466> **You can not use this command | Permission: ADMINISTRATOR**")
		  }
		  
			if(!args[0]) {
			return message.channel.send("<:pepeno:997843592955580466> **Please give the message to set**")
		  }
		  
		  let msg = args.slice(0).join(" ")
		  
		  db.set(`lefttextmsg_${message.guild.id}`, `${msg}`)
		await message.channel.send(`<:peppoyes:997843596290052177> **Text Leave message seted to ${msg}**`)
	}
}