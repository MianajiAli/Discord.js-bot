const Discord = require('discord.js');
const superagent = require('superagent')
const colors = require('../colors.json')

module.exports = {
    name: "hentai",

    async run (client, message, args) {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'hentai_anal'})
			.end((err, response) => {
				const hentai = new Discord.MessageEmbed()
				.setTitle('Enjoy :smiling_imp:')
				.setImage(response.body.message)
				.setColor(colors.main)
			  message.channel.send(hentai)
			});
		  } else {
			message.channel.send("<:pepeno:997843592955580466> **This isn't NSFW channel**")
		}
	}
}