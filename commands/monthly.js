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
		.setDescription('<a:no:863733318809812992> **You are banned from using this section | Reason : Abuse\n[Contact](https://devevilbot.xyz/contact) with the [owner of the bot](https://discord.com/users/468132563714703390) to appeal a permanent ban**')
		.setColor(color.main)

		if(target) {
			return message.reply(ban_error)
		}
		
		let timeout = 2592000000
		let amount = 5000
	
	
		let monthly = await db.fetch(`monthly_${message.author.id}`);
	
		if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
			let time = ms(timeout - (Date.now() - monthly));
	
			message.channel.send(`<a:alert:995652726543355975> **You already collected your monthly reward**`)
		} else {
			message.channel.send(`<a:verify:995645296736481320> **Great ${message.author.tag} You've been received 5000 DB Coin 🪙**`)
		db.add(`money_${message.author.id}`, amount)
		db.set(`monthly_${message.author.id}`, Date.now())
			
		} 
	}
}