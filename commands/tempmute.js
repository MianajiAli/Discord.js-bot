const colors = require('../colors.json')
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const db = require('quick.db')

module.exports = {
    name: "tempmute",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:no:997879343999111280> **You can not use this command | Permission: ADMINISTRATOR**')
		if(!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send('<a:no:997879343999111280> **I do not have the correct permissions | Permission : MUTE_MEMBERS**')
		
        let user = message.mentions.members.first();
        let time = args[1]
        let reason = args.slice(2).join(' ');
        let mutedrole =  message.guild.roles.cache.find(r => r.name === "Muted")
    
         
        if(!user) return message.channel.send("<a:no:997879343999111280> **You need mention a member**");
        if(!time) return message.channel.send("<a:no:997879343999111280> **You need declare the time of the mute**");
        if(!reason) return message.channel.send("<a:no:997879343999111280> **You need declare the reason of the mute**")
		if(!mutedrole){
			try{
			  mutedrole = await message.guild.roles.create({
			   data: {
				  name: "Muted",
				  color: "#8b6363",
				  permissions: ['ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY']
			   },
			  })
			}catch(e){
			  console.log(e.stack);
			}
		}
        
        user.roles.add(mutedrole);

		message.react('<a:yes:997879349170684064>')

        setTimeout(function(){
			const unmute = new Discord.MessageEmbed()
			.setColor(colors.main)
			.setDescription('**User unmuted**')
			message.channel.send(unmute)
            user.roles.remove(mutedrole);

        }, ms(time));


		const mute = new Discord.MessageEmbed()
		.setTitle('User Mute')
		.setColor(colors.main)
		.addField('Username', `**${user}**`)
		.addField('Muted by', `**${message.author}**`)
		.addField('Reason', `**${reason}**`)
		.addField('Time', `**${time}**`)

		let mChannel = db.fetch(`modlog_${message.guild.id}`)
		if(!mChannel) return message.channel.send('<a:no:997879343999111280> **Log channel is not setup, make sure to set a channel as a log channel using ``modlog`` command**')         .then(msg => {
			msg.delete({timeout: 5000})
		})
		let muteChannel = message.guild.channels.cache.get(mChannel)
		if(!muteChannel) return;
		muteChannel.send(mute)
    }
	
	

}