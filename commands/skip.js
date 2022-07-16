const { MessageEmbed } = require("discord.js");
const colors = require('../colors.json')

module.exports = {
    name: 'skip',
    description: 'Skip the song that its playing.', 
        run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`<a:no:997879343999111280> **You must be in a voice channel to play something**`)
            if(!client.player.isPlaying(message)) {
			message.channel.send('<a:no:997879343999111280> **Something must be playing in order to skip the track**');

			return;
		}

		await client.player.skip(message);

		message.channel.send('<a:yes:997879349170684064> **Skipped**');
	},
};