const Discord = require('discord.js');
const superagent = require('superagent')
const colors = require('../colors.json')

module.exports = {
    name: "pussy",

    async run (client, message, args) {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'pussy'})
			.end((err, response) => {
				const pussy = new Discord.MessageEmbed()
				.setTitle('Enjoy :smiling_imp:')
				.setImage(response.body.message)
				.setColor(colors.main)
			  message.channel.send(pussy)
			});
		  } else {
			message.channel.send("<a:alert:995652726543355975> **This isn't NSFW channel**")
		}
	}
}