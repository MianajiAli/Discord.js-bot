const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'skip',
    description: 'Skip the song that its playing.', 
        run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<:pepeno:997843592955580466> **You must be in a voice channel to play something**`)
            if(!client.player.isPlaying(message)) {
			message.channel.send('<:pepeno:997843592955580466> **Something must be playing in order to skip the track**');

			return;
		}

		await client.player.skip(message);

		message.channel.send('<:peppoyes:997843596290052177> **Skipped**');
	},
};