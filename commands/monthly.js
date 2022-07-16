const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require("ms")
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "monthly",

    async run (client, message, args) {
		let target = db.get(`userb_${message.author.id}`);

		const ban_error = new Discord.MessageEmbed()
		.setDescription('<:pepeno:997843592955580466> **You are banned from using this section**')
		.setColor(color.main)

		if(target) {
			return message.reply(ban_error)
		}
		
		let timeout = 2592000000
		let amount = 5000
	
	
		let monthly = await db.fetch(`monthly_${message.author.id}`);
	
		if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
			let time = ms(timeout - (Date.now() - monthly));
	
			message.channel.send(`<:pepeno:997843592955580466> **You already collected your monthly reward**`)
		} else {
			message.channel.send(`<:peppoyes:997843596290052177> **Great ${message.author.tag} You've been received 5000 DB Coin 🪙**`)
		db.add(`money_${message.author.id}`, amount)
		db.set(`monthly_${message.author.id}`, Date.now())
			
		} 
	}
}