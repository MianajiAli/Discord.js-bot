const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const ms = require("ms")
const talkedRecently = new Set();
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "rob",

    async run (client, message, args) {
        let target = db.get(`userb_${message.author.id}`);

		const ban_error = new Discord.MessageEmbed()
		.setDescription('<a:no:863733318809812992> **You are banned from using this section**')
		.setColor(color.main)

		if(target) {
			return message.reply(ban_error)
		}
        
	let user = message.mentions.users.first()
    let targetuser = await db.fetch(`money_${user}`)
    let author = await db.fetch(`money_${message.author.id}`) 


    if (!user) {
        return message.channel.send('<a:alert:995652726543355975> **Please mention a user**')
    }
	if(user.id === message.author.id) return message.channel.send('<a:alert:995652726543355975> **You cant rob yourself -_- Bruh**');
    if (author < 250) { // if the authors balance is less than 250, return this.
        return message.channel.send('<a:alert:995652726543355975> **You need atleast 250$ to rob somebody**')
    }

    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`<a:alert:995652726543355975> **${user.user.username} does not have anything to rob**`)
    }

    let random = Math.floor(Math.random() * 1000) + 1; // random number 200-1, you can change 200 to whatever you'd like
	
    if (talkedRecently.has(message.author.id)) {
        message.reply("**You have to wait 6 hours**");
} else {
            let embed = new Discord.MessageEmbed()
            .setDescription(`<a:verify:995645296736481320> **${message.author} you robbed ${user} and got away with ${random}**`)
            .setColor(color.main)
            .setTimestamp()
            message.channel.send(embed)
        
        
            db.subtract(`money_${user.id}`, random)
            db.add(`money_${message.author.id}`, random)
            talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 2.16e+7);
        }
	}

}