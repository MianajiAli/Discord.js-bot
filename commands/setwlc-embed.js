const db = require('quick.db')
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');

module.exports = {
    name: "setwlc-embed",

    async run (client, message, args) {
		if (!message.member.hasPermission("ADMINISTRATION")) {
            return message.channel.send("<:pepeno:997843592955580466> **You can not use this command | Permission: ADMINISTRATOR**");
          }
          let channel = message.mentions.channels.first()
          
          if(!channel) {
            return message.channel.send("<:pepeno:997843592955580466> **Please Mention the channel first**")
          }
          
          
          db.set(`welcemchannel_${message.guild.id}`, channel.id)
          
          message.channel.send(`<:peppoyes:997843596290052177> **Welcome Channel is seted as ${channel}**`)



    
	}
}