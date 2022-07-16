const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix ,owner } = require("./../config.json");

module.exports = {
    name: "setrankbg",

    async run (client, message, args) {
		let pr = message.author.id==owner;

		if(!pr) {
			return message.channel.send('<:pepeno:997843592955580466> **This is only owner command**')
		}
		
		let user = message.author;
		  
		  if(!args[0]) {
			return message.channel.send("<:pepeno:997843592955580466> **Please give the link of the image**")
		  }
		  
		  db.set(`rankbg_${user.id}`, args[0])
		await message.channel.send(`<:peppoyes:997843596290052177> **Rank card background image seted to ${args[0]}**`)
	}
}