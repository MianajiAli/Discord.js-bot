const db = require('quick.db')
const Discord = require("discord.js");
const { MessageEmbed, MessageReaction } = require("discord.js");
const color = require('../colors.json')


module.exports = {
    name: "idban",

    async run (client, message, args) {
		if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:alert:995652726543355975> **You can not use this command | Permission: BAN_MEMBERS**')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:alert:995652726543355975> **I do not have the correct permissions**')
        
        const target = args[0];
        if (isNaN(target)) return message.reply(`<a:alert:995652726543355975> **Please specify an ID**`);

        const reason   = args.splice(1, args.length).join(' ');

        message.react('<a:verify:995645296736481320>')

            try {
                message.guild.members.ban(target, {reason: reason.length < 1 ? '**No reason supplied**': reason});
            const e = new MessageEmbed()
                .setAuthor(`User has been banned`, message.guild.iconURL())
                .setColor(color.main)
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**ID**", `**${target}**`)
                .addField("**Banned By**", `**${message.author.username}**`)
                .addField("**Reason**", `**${reason || "**No Reason**"}**`)
                .setTimestamp();

  
				let mChannel = db.fetch(`modlog_${message.guild.id}`)
				if(!mChannel) return message.channel.send(e)
				let banChannel = message.guild.channels.cache.get(mChannel)
				if(!banChannel) return;
				banChannel.send(e)

            } catch (error) { console.log(error)}
    
	}
}