const db = require('quick.db')
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');

module.exports = {
    name: "setleave",

    async run (client, message, args) {
		if (!message.member.hasPermission("ADMINISTRATION")) {
            return message.channel.send("<a:no:997879343999111280> **You can not use this command | Permission: ADMINISTRATOR**");
          }
          let channel = message.mentions.channels.first()
          
          if(!channel) {
            return message.channel.send("<a:no:997879343999111280> **Please Mention the channel first**")
          }
          
          
          db.set(`leftchannel_${message.guild.id}`, channel.id)
          
          message.channel.send(`<a:yes:997879349170684064> **Leave Channel is seted as ${channel}**`)



    
	}
}