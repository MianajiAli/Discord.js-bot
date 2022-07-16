const db = require('quick.db')
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');

module.exports = {
    name: "setwlc",

    async run (client, message, args) {
		if (!message.member.hasPermission("ADMINISTRATION")) {
            return message.channel.send("<a:no:997879343999111280> **You can not use this command | Permission: ADMINISTRATOR**");
          }
          if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:no:997879343999111280> **I do not have the correct permissions**')
          let channel = message.mentions.channels.first()
          
          if(!channel) {
            return message.channel.send("<a:no:997879343999111280> **Please Mention the channel first**")
          }
          
          
          db.set(`welchannel_${message.guild.id}`, channel.id)
          
          message.channel.send(`<a:yes:997879349170684064> **Welcome Channel is seted as ${channel}**`)



    
	}
}