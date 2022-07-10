const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "setrankbg",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<a:alert:995652726543355975> **This is only owner command**')
		}
		
		let user = message.author;
		  
		  if(!args[0]) {
			return message.channel.send("<a:alert:995652726543355975> **Please give the link of the image**")
		  }
		  
		  db.set(`rankbg_${user.id}`, args[0])
		await message.channel.send(`<a:verify:995645296736481320> **Rank card background image seted to ${args[0]}**`)
	}
}