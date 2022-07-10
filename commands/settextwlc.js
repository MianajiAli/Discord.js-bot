const db = require('quick.db')
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');

module.exports = {
    name: "settextwlc",

    async run (client, message, args) {
		if (!message.member.hasPermission("ADMINISTRATION")) {
            return message.channel.send("<a:alert:995652726543355975> **You can not use this command | Permission: ADMINISTRATOR**");
          }
          let channel = message.mentions.channels.first()
          
          if(!channel) {
            return message.channel.send("<a:alert:995652726543355975> **Please Mention the channel first**")
          }
          
          
          db.set(`wlctextch_${message.guild.id}`, channel.id)
          
          message.channel.send(`<a:verify:995645296736481320> **Text Welcome Channel is seted as ${channel}**`)

	}
}