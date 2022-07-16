const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');
const fs = require('fs');

module.exports = {
    name: "play-vc",

    async run (client, message, args) {
		const channel = message.member.voice.channel;
        if(!channel) return message.channel.send('<:pepeno:997843592955580466> **Please join a voice channel**');

		if(!fs.existsSync(`./recorded-voices/recorded-${message.author.tag}.pcm`)) return message.channel.send('<:pepeno:997843592955580466> **Your audio is not recorded**')

		const connection = await message.member.voice.channel.join();
		const stream = fs.createReadStream(`./recorded-voices/recorded-${message.author.tag}.pcm`)

		const dispatcher = connection.play(stream, {
			type: 'converted'
		})


		dispatcher.on('finish', () => {
			message.member.voice.channel.leave();
			message.channel.send('<:peppoyes:997843596290052177> **Finished playing audio**')
		});


	}
}